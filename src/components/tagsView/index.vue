<template>
  <div class="tagsView">
    <router-link
      class="link"
      v-for="(item, index) in store.getters.tagsViewList"
      :key="item.path"
      :class="isActive(item) ? 'active' : ''"
      :to="item.fullPath"
      :style="{
        backgroundColor: isActive(item) ? store.getters.cssVar.menuBg : '',
        borderColor: isActive(item) ? store.getters.cssVar.menuBg : ''
      }"
      @contextmenu.prevent="openMenu($event, index)"
    >
      {{ item.title }}
      <i
        class="el-icon-close"
        v-show="!isActive(item)"
        @click="clickClose(index)"
      ></i>
    </router-link>
    <contextMenu
      v-show="visible"
      :index="selectIndex"
      :style="menuStyle"
    ></contextMenu>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import contextMenu from './contextMenu.vue'
import { useStore } from 'vuex'
const store = useStore()
const route = useRoute()
const visible = ref(false)
const selectIndex = ref(0)
const menuStyle = ref({
  top: 0,
  left: 0
})
const isActive = (tag) => {
  return tag.path === route.path
}
// 点击关闭
const clickClose = (index) => {
  store.commit('app/deleteItem', {
    type: 'index',
    index: index
  })
  visible.value = false
}
// 点击打开
const openMenu = (e, index) => {
  selectIndex.value = index
  const { x, y } = e
  menuStyle.value.top = y + 'px'
  menuStyle.value.left = x + 'px'
  visible.value = !visible.value
}
watch(visible, (val) => {
  console.log(visible.value, val, '3333')
  if (val) {
    document.body.addEventListener('click', () => {
      console.log('111')
      visible.value = false
    })
  } else {
    document.body.removeEventListener('click', () => {
      console.log('2222')
      visible.value = false
    })
  }
})
</script>

<style lang="scss" scoped>
.tagsView {
  height: 30px;
  .link {
    margin-left: 5px;
    font-size: 20px;
    border: 1px solid rgb(177, 174, 174);
  }
}
.active {
  background-color: black;
  color: #ffffff;
}
</style>
