<template>
  <div class="sidebar">
    <h1>占位</h1>
    <el-scrollbar>
      <sidebarMenu></sidebarMenu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import {} from 'vue'
import sidebarMenu from './sidebarMenu.vue'
import store from '@/store'
</script>

<style lang="scss" scoped>
.sidebar {
  width: 210px;
  height: 100%;
}
</style>
