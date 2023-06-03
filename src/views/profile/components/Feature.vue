<template>
  <el-collapse v-model="activeNames" accordion>
    <el-collapse-item
      v-for="item in features"
      :key="item.id"
      :title="item.title"
      :name="item.id"
    >
      <div v-html="item.content"></div>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue'
const props = defineProps({
  features: {
    type: Array,
    required: true
  }
})
const activeNames = ref(1)
watch(
  () => props.features,
  (val) => {
    console.log(val)
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
::v-deep .el-collapse-item__header.is-active {
  font-weight: 700;
}
::v-deep .el-collapse-item__content {
  & a {
    color: #2d82f9 !important;
  }
}
</style>
