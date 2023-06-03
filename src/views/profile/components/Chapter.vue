<template>
  <el-timeline>
    <el-timeline-item
      :timestamp="item.timestamp"
      placement="top"
      v-for="item in chapterList"
      :key="item.id"
    >
      <el-card> {{ item.content }}</el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<script setup>
import { ref } from 'vue'
import { chapter } from '@/api/user.js'
const chapterList = ref([])
const chapterData = async () => {
  chapterList.value = await chapter()
}
chapterData()
</script>

<style lang="scss" scoped></style>
