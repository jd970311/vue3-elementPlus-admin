<template>
  <div class="layoutContainer">
    <!-- 侧边栏 -->
    <sidebar
      :style="{ backgroundColor: store.getters.cssVar.menuBg }"
    ></sidebar>
    <div class="container">
      <!-- 头部菜单 -->
      <navbar></navbar>
      <!-- 主页面 -->
      <appmain></appmain>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import sidebar from './components/sidebar'
import navbar from './components/NavBar.vue'
import appmain from './components/AppMain.vue'
import store from '@/store'
</script>

<style lang="scss" scoped>
.layoutContainer {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  .container {
    width: calc(100% - 210px);
    height: 100%;
  }
}
</style>
