<template>
  <el-breadcrumb separator="/">
    <transition-group name="list">
      <el-breadcrumb-item v-for="(item, index) in filterRoute" :key="item.path">
        <!-- 不可点击项 -->
        <span class="no-direct" v-if="index == filterRoute.length - 1">
          {{ item.meta.title }}
        </span>
        <!-- 可点击项 -->
        <span class="direct" v-else @click="clickRoute(item)">
          {{ item.meta.title }}
        </span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
const route = useRoute()
const filterRoute = ref([])
watch(
  route,
  (newValue, oldValue) => {
    filterRoute.value = route.matched.filter((item) => {
      return item.meta && item.meta.title
    })
    console.log(filterRoute)
  },
  // 立即执行，且当 `source` 改变时再次执行
  { immediate: true }
)
const router = useRouter()
const clickRoute = (item) => {
  router.push(item.path)
}
const store = useStore()
const hoverColor = ref(store.getters.cssVar.menuBg)
</script>

<style lang="scss" scoped>
.no-direct {
  color: #97a8be;
}
.direct {
  color: #666;
  font-weight: 600;
  cursor: pointer;
}
.direct:hover {
  color: v-bind(hoverColor);
}
</style>
