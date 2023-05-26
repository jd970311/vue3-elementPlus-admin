<template>
  <div class="">
    <el-dropdown trigger="click" @command="clickLink">
      <div class="language">
        <el-tooltip :effect="effect" content="国际化">
          <svg-icon id="guide-lang" icon="language"></svg-icon>
        </el-tooltip>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :disabled="lang === 'zh'" command="zh"
            >中文</el-dropdown-item
          >
          <el-dropdown-item :disabled="lang === 'en'" command="en"
            >English</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
const store = useStore()
const props = defineProps({
  effect: {
    type: String,
    default: 'dark',
    validator(value) {
      return ['dark', 'light'].indexOf(value) !== -1
    }
  }
})
const lang = computed(() => {
  return store.getters.language
})
const i18n = useI18n()
const clickLink = (val) => {
  i18n.locale.value = val
  store.commit('app/getLang', val)
  // 提示
  ElMessage.success(i18n.t('msg.toast.switchLangSuccess'))
}
</script>

<style lang="scss" scoped>
.language {
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
}
</style>
