<template>
  <div class="guide">
    <el-tooltip :content="$t('msg.navBar.guide')">
      <svg-icon id="guide-start" icon="guide" @click="onClick"></svg-icon>
    </el-tooltip>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import { useI18n } from 'vue-i18n'
import step from './step.js'
const i18n = useI18n()

let driver = null
onMounted(() => {
  driver = new Driver({
    allowClose: false, //禁止点击蒙版关闭
    closeBtnText: i18n.t('msg.guide.close'),
    nextBtnText: i18n.t('msg.guide.next'),
    prevBtnText: i18n.t('msg.guide.prev')
  })
})

const onClick = () => {
  driver.defineSteps(step(i18n))
  driver.start()
}
</script>

<style lang="scss" scoped>
.guide {
  height: 40px;
  line-height: 40px;
  margin-right: 10px;
}
</style>
