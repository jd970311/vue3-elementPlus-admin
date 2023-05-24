import { setItem, getItem } from '@/utils/storage'
import variables from '@/styles/variables.module.scss'
export default {
  namespaced: true,
  state: () => ({
    themeColor: getItem('themeColor') || '#409eff',
    variables: variables
  }),
  mutations: {
    changeColor(state, color) {
      setItem('themeColor', color)
      state.themeColor = color
      state.variables.menuBg = color
    }
  },
  actions: {}
}