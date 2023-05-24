<template>
  <div>
    <el-dialog
      :model-value="modelValue"
      :title="$t('msg.universal.title')"
      width="30%"
      @close="cancel"
    >
      <div class="content">
        <div>主题颜色更换</div>
        <!-- 取色器 -->
        <el-color-picker v-model="color1" :predefine="predefineColors" />
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancel">{{
            $t('msg.universal.cancel')
          }}</el-button>
          <el-button type="primary" @click="confirm">
            {{ $t('msg.universal.confirm') }}
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import store from '@/store'
import { generateNewStyle, writeNewStyle } from '@/utils/theme'
// 定义父传子数据
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})
// 定义子传父事件
const emits = defineEmits(['update:modelValue'])
// 定义数据
const color1 = ref(store.getters.themeColor)
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577'
])
// 定义事件
const confirm = async () => {
  const newStyle = await generateNewStyle(color1.value)
  writeNewStyle(newStyle)
  store.commit('theme/changeColor', color1.value)
  cancel()
}
// 弹框取消
const cancel = () => {
  emits('update:modelValue', false)
}
</script>

<style lang="scss" scoped>
.content {
  text-align: center;
}
</style>
