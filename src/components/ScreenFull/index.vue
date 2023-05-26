<template>
  <div class="main" @click="ontoggle">
    <svg-icon
      id="guide-full"
      :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
    ></svg-icon>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import screenfull from 'screenfull'
const isFullscreen = ref(false)
// 定义事件
const ontoggle = () => {
  screenfull.toggle()
}

// on监听事件
onMounted(() => {
  screenfull.on('change', () => {
    isFullscreen.value = screenfull.isFullscreen
  })
})

// off取消监听事件
onUnmounted(() => {
  screenfull.off('change', () => {
    isFullscreen.value = screenfull.isFullscreen
  })
})
</script>

<style lang="scss" scoped>
.main {
  margin-left: 20px;
  height: 40px;
  line-height: 40px;
}
</style>
