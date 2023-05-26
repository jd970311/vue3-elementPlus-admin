<template>
  <div class="navbar">
    <!-- 图标 -->
    <hamburger class="hamburger-container"></hamburger>
    <!-- 面包屑 -->
    <breadcrumb id="guide-breadcrumb" class="breadcrumb"></breadcrumb>
    <!-- 功能引导 -->
    <guide></guide>
    <!-- 搜索框 -->
    <headerSearch></headerSearch>
    <!-- 国际化语言 -->
    <langSelect></langSelect>
    <!-- 动态换肤 -->
    <themeSelect class="themeSelect"></themeSelect>
    <!--全屏 -->
    <screenfull></screenfull>
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
              <router-link to=""> {{ $t('msg.navBar.home') }} </router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to=""> {{ $t('msg.navBar.course') }} </router-link>
            </el-dropdown-item>
            <el-dropdown-item @click="logout">
              {{ $t('msg.navBar.logout') }}
            </el-dropdown-item>
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
import langSelect from '@/components/langSelect'
import themeSelect from '@/components/ThemeSelect'
import screenfull from '@/components/ScreenFull'
import headerSearch from '@/components/headerSearch'
import guide from '@/components/guide'
// import router from '@/router'
// import { useStore } from 'vuex'
// const store = useStore()
const logout = () => {
  store.dispatch('user/logout')
}
// 定义事件
const handleClose = (tag) => {
  console.log(tag)
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  height: 10%;
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
::v-deep .themeSelect {
  height: 40px;
  line-height: 40px;
}
.el-avatar {
  --el-avatar-background-color: none;
}
</style>
