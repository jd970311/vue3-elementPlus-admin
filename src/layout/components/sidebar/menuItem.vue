<template>
  <div :class="icon.includes('el-icon') ? '' : 'container'">
    <!-- element图标 -->
    <i v-if="icon.includes('el-icon')" class="sub-el-icon" :class="icon"></i>
    <!-- 非emelemnt图标 -->
    <svg-icon v-else :icon="icon"></svg-icon>
    <!-- 文本 -->
    <span class="title">{{ title }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
.title {
  margin-left: 10px;
}
</style>
