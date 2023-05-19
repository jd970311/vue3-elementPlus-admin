<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :model="loginForm"
      :rules="loginRules"
      ref="loginFormRef"
    >
      <div class="title-container">
        <h3 class="title">{{ $t('msg.login.title') }}</h3>
        <langSelect effect="light"></langSelect>
      </div>
      <!-- username -->
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon="user"></svg-icon>
        </span>
        <el-input
          placeholder="请输入账号"
          v-model="loginForm.username"
          type="text"
        ></el-input>
      </el-form-item>
      <!-- password -->
      <el-form-item prop="password">
        <span class="svg-container">
          <Svg-Icon icon="password"></Svg-Icon>
        </span>
        <el-input
          placeholder="请输入密码"
          v-model="loginForm.password"
          :type="isPassword"
        ></el-input>
        <span class="show-pwd" @click="showPassword">
          <svg-icon
            :icon="isPassword === 'password' ? 'eye' : 'eye-open'"
          ></svg-icon>
        </span>
      </el-form-item>
      <!-- 登录按钮 -->
      <el-button
        type="primary"
        style="width: 100%; margfin-bottom: 30px"
        :loading="loading"
        @click="handlerlogin"
      >
        {{ $t('msg.login.loginBtn') }}
      </el-button>
      <div class="tips" v-html="$t('msg.login.desc')"></div>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { validatePassword } from './rule.js'
// import store from '@/store'
import { useStore } from 'vuex'
import router from '@/router'
import langSelect from '@/components/langSelect/index.vue'
import { useI18n } from 'vue-i18n'
const isPassword = ref('password')
// 获取dom操作
const loginFormRef = ref(null)
// 定义数据原
const loginForm = reactive({
  username: 'super-admin',
  password: '123456'
})
// 定义规则
const i18n = useI18n()
const loginRules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: i18n.t('msg.login.usernameRule')
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})
// 定义方法
const showPassword = () => {
  if (isPassword.value === 'password') {
    isPassword.value = 'text'
  } else {
    isPassword.value = 'password'
  }
}
// 登录
const loading = ref(false)
const store = useStore()
const handlerlogin = () => {
  // 1.进行表单校验
  loginFormRef.value.validate((valid) => {
    if (!valid) return //如果没有通过校验 直接return
    if (valid) {
      // 2. 通过校验以后发起请求
      loading.value = true
      store
        .dispatch('user/login', loginForm)
        .then((res) => {
          loading.value = false
          // 3. 进行登录后的操作
          router.push('/')
        })
        .catch((err) => {
          loading.value = false
          console.log(err)
        })
    } else {
      console.log('失败')
    }
  })
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 85px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0);
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        caret-color: $cursor; // caret-color 属性规定 input、textareas 或任何可编辑元素中的光标（插入符号）的颜色。
      }
    }
    .tips {
      font-size: 16px;
      color: #fff;
      line-height: 24px;
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }
  .title-container {
    display: flex;
    position: relative;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none; //user-select 属性规定是否能选取元素的文本。
  }
}
::v-deep .el-dropdown {
  background-color: #fff;
}
</style>
