<template>
  <div class="hamburger-container" @click="triggerClick">
    <svg-icon id="guide-hamburger" class="hamburger" :icon="icon"></svg-icon>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import store from '@/store'
// 点击事件
const triggerClick = () => {
  store.commit('app/triggerSidebar')
}
const icon = computed(() => {
  return store.getters.sidebarOpened ? 'hamburger-opened' : 'hamburger-closed'
})
</script>

<style lang="scss" scoped>
.hamburger-container {
  .hamburger {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    width: 40px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    transition: background 0.5s;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
