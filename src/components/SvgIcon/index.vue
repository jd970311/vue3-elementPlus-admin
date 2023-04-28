<template>
  <div class="">
    <!-- 展示外部图标 -->
    <div
      v-if="isExternal"
      :style="styleExternalIcon"
      class="svg-external-icon svg-icon"
      :class="className"
    ></div>
    <!-- 展示内部图标 -->
    <svg v-else class="svg-icon" :class="className" aria-hidden="true">
      <use :xlink:href="iconName" />
    </svg>
  </div>
</template>

<script setup>
import { isExternal as external } from '@/utils/validate'
import { defineProps, computed } from 'vue'
const props = defineProps({
  // 内部图标 icon
  icon: {
    type: String,
    required: true
  },
  // 类名
  className: {
    type: String,
    default: ''
  }
})
// 判断当前图标是否为外部图标
const isExternal = computed(() => {
  return external(props.icon)
})
// 外部图标样式
const styleExternalIcon = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
}))
// 内部图标
const iconName = computed(() => `#icon-${props.icon}`)
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1rem;
  height: 1rem;
  vertical-align: -0.15rem;
  fill: currentColor;
  overflow: hidden;
}
.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
