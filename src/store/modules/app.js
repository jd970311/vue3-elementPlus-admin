import { getItem, setItem } from '@/utils/storage.js'
export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true,
    language: getItem('lang') || 'zh',
    tagsViewList: getItem('tags') || []
  }),
  mutations: {
    triggerSidebar(state) {
      state.sidebarOpened = !state.sidebarOpened
    },
    getLang(state, lang) {
      setItem('lang', lang)
      state.language = lang
    },
    addTagsViewList(state, tags) {
      // 去重，find 找到返回当前项 找不到返回undefined
      const findItem = state.tagsViewList.find(item => {
        return item.path === tags.path
      })
      if (!findItem) {
        state.tagsViewList.push(tags)
        // 本地存储
        setItem('tags', state.tagsViewList)
      }
    },
    // 修改title
    changeTagsView(state, { index, tag }) {
      state.tagsViewList[index] = tag
      setItem('tags', state.tagsViewList)
    },
    // 删除tagsView ,type分为 right | other | index
    deleteItem(state, payload) {
      if (payload.type === 'index') {
        state.tagsViewList.splice(payload.index, 1)
      } else if (payload.type === 'right') {
        // 删除右侧
        state.tagsViewList.splice(payload.index + 1)
      } else if (payload.type === 'other') {
        // 删除当前项之后的
        state.tagsViewList.splice(payload.index + 1)
        // 删除当前项之前的
        state.tagsViewList.splice(0, payload.index)
      }
      setItem('tags', state.tagsViewList)
    }
  },
  actions: {},
}