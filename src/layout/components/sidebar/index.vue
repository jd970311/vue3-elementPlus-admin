<template>
  <div :class="[store.getters.sidebarOpened ? 'sidebar' : 'sidebarClose']">
    <div class="container">
      <el-avatar
        shape="square"
        :size="height"
        src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
      />
      <div class="title" v-if="store.getters.sidebarOpened">imooc-admin</div>
    </div>
    <el-scrollbar>
      <sidebarMenu></sidebarMenu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import {} from 'vue'
import sidebarMenu from './sidebarMenu.vue'
import store from '@/store'
const height = 44
</script>

<style lang="scss" scoped>
.sidebar {
  transition: width 0.2s;
  height: 100%;
  width: 210px;
}
.sidebarClose {
  transition: width 0.2s;
  height: 100%;
  width: 54px;
}
.container {
  height: v-bind(height) + 'px';
  padding: 10px 0 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }
}
</style>
