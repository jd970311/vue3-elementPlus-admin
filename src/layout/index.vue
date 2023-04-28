<template>
  <div class="layoutContainer">
    <!-- 侧边栏 -->
    <sidebar :style="{ backgroundColor: allColor }"></sidebar>
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

const allColor = ref('pink')
</script>

<style lang="scss" scoped>
.layoutContainer {
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  .container {
    width: calc(100% - 210px);
    height: 100%;
  }
}
</style>
