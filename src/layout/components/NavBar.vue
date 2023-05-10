<template>
  <div class="navbar">
    <!-- 图标 -->
    <hamburger class="hamburger-container"></hamburger>
    <!-- 面包屑 -->
    <breadcrumb class="breadcrumb"></breadcrumb>
    <!-- 右侧菜单 -->
    <div class="rightMenu">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <el-avatar
            shape="square"
            :size="40"
            :src="store.getters.userInfos.avatar"
          />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <router-link to=""> 主页 </router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to=""> 课程主页 </router-link>
            </el-dropdown-item>
            <el-dropdown-item @click="logout"> 退出登录 </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
import store from '@/store'
import hamburger from '@/components/hamburger'
import breadcrumb from '@/components/breadcrumb'
// import router from '@/router'
// import { useStore } from 'vuex'
// const store = useStore()
const logout = () => {
  store.dispatch('user/logout')
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  height: 20%;
  width: 100%;
  border: 1px solid orange;
}
.breadcrumb {
  width: 90%;
  height: 40px;
  line-height: 40px;
}
.rightMenu {
  height: 40px;
  width: 100%;
  position: relative;
  ::v-deep .el-dropdown {
    position: absolute;
    right: 40px;
  }
}
</style>
