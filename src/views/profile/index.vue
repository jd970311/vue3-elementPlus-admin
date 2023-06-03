<template>
  <el-row class="main">
    <el-col :span="6">
      <ProjectCard class="ProjectCard" :features="featureDate"></ProjectCard>
    </el-col>
    <el-col :span="18">
      <el-crad>
        <el-tabs
          v-model="activeName"
          class="demo-tabs"
          @tab-click="handleClick"
        >
          <el-tab-pane label="功能" name="feature">
            <feature :features="featureDate"></feature>
          </el-tab-pane>
          <el-tab-pane label="章节" name="chapter">
            <chapter></chapter>
          </el-tab-pane>
          <el-tab-pane label="作者" name="Author">
            <Author></Author>
          </el-tab-pane>
        </el-tabs>
      </el-crad>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from './components/ProjectCard.vue'
import feature from './components/Feature.vue'
import chapter from './components/Chapter.vue'
import Author from './components/Author.vue'
import { features } from '@/api/user.js'
const activeName = ref('feature')
const handleClick = (tab, event) => {
  console.log(tab, event)
}
const featureDate = ref([])
const getFeaturesData = async () => {
  featureDate.value = await features()
}
getFeaturesData()
</script>

<style lang="scss" scoped>
.ProjectCard {
  margin-right: 20px;
}
</style>
