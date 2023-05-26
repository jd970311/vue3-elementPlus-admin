<template>
  <ul class="all">
    <li @click="refresh">{{ $t('msg.tagsView.refresh') }}</li>
    <li @click="closeRight">{{ $t('msg.tagsView.closeRight') }}</li>
    <li @click="closeOther">{{ $t('msg.tagsView.closeOther') }}</li>
  </ul>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue'
import { useStore } from 'vuex'
import router from '@/router/index.js'
const store = useStore()
const props = defineProps({
  index: {
    type: Number,
    required: true
  }
})
watch(
  () => props.index,
  (val) => {
    console.log(val, 'val')
  }
)
const refresh = () => {
  router.go(0)
}
const closeRight = () => {
  store.commit('app/deleteItem', {
    type: 'right',
    index: props.index
  })
}
const closeOther = () => {
  store.commit('app/deleteItem', {
    type: 'other',
    index: props.index
  })
}
</script>

<style lang="scss" scoped>
.all {
  position: absolute;
  height: 100px;
  width: 80px;
  text-align: center;
  box-shadow: 4px 4px #e8eaed;
  background-color: #fff;
  z-index: 99999;
  li {
    height: 33%;
    width: 100%;
    list-style: none;
    cursor: pointer;
    &:hover {
      background-color: orange;
    }
  }
}
</style>
