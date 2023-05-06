<template>
  <div class="sidebarMenu">
    <el-menu
      class="elMenu"
      :collapse="!store.getters.sidebarOpened"
      :background-color="store.getters.cssVar.menuBg"
      :active-text-color="store.getters.cssVar.menuText"
      :text-color="store.getters.cssVar.menuActiveText"
      :unique-opened="true"
      :default-active="activeMenu"
      router
    >
      <sidebarItem
        :route="item"
        v-for="item in routes"
        :key="item.path"
      ></sidebarItem>
    </el-menu>
  </div>
</template>

<script setup>
import sidebarItem from '@/layout/components/sidebar/sidebarItem'
import { computed } from 'vue'
// import router from '@/router'
import { useRouter, useRoute } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import store from '@/store'
const router = useRouter()
const route = useRoute()

// 页面加载时默认激活菜单的 index
// 一个计算属性 返回的数据是响应式数据 相当于 ref 绑定的数据 具有value属性
const routes = computed(() => {
  const res = router.getRoutes()
  const result = filterRouters(res)
  return generateMenus(result)
})
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>

<style lang="scss" scoped>
.sidebarMenu {
  .elMenu {
    height: 100vh;
  }
}
</style>
