import { getItem, setItem } from '@/utils/storage.js'
export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true,
    language: getItem('lang') || 'zh'
  }),
  mutations: {
    triggerSidebar(state) {
      state.sidebarOpened = !state.sidebarOpened
    },
    getLang(state, lang) {
      setItem('lang', lang)
      state.language = lang
    }
  },
  actions: {},
}