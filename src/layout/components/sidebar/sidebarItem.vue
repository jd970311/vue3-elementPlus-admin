<template>
  <el-sub-menu v-if="route.children.length > 0" :index="route.path">
    <template #title>
      <menuItem :icon="route.meta.icon" :title="route.meta.title"></menuItem>
    </template>
    <!-- 循环渲染 -->
    <sidebarItem
      v-for="item in route.children"
      :route="item"
      :key="item.path"
    ></sidebarItem>
  </el-sub-menu>
  <el-menu-item v-else :index="route.path">
    <menuItem :icon="route.meta.icon" :title="route.meta.title"></menuItem>
  </el-menu-item>
</template>

<script setup>
import menuItem from './menuItem.vue'
import { defineProps } from 'vue'
const props = defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
