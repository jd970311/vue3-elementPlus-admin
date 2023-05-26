<template>
  <el-dropdown
    v-bind="$attrs"
    trigger="click"
    class="theme"
    @command="handleSetTheme"
  >
    <!-- 图标 -->
    <div>
      <el-tooltip :content="$t('msg.navBar.themeChange')">
        <svg-icon id="guide-theme" icon="change-theme"></svg-icon>
      </el-tooltip>
    </div>
    <!-- menu -->
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="color">{{
          $t('msg.theme.themeColorChange')
        }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- 弹出层 -->
  <selectColor v-model="modelValue"></selectColor>
</template>
<script setup>
import { ref } from 'vue'
import selectColor from './components/selectColor.vue'
// 定义数据
const modelValue = ref(false)
// 定义方法
const handleSetTheme = (command) => {
  modelValue.value = !modelValue.value
}
</script>

<style lang="scss" scoped>
.theme {
  height: 40px;
  line-height: 40px;
}
</style>
