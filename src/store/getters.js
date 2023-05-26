// 快捷访问样式
import variables from '@/styles/variables.module.scss';
import { generateColors } from '@/utils/theme'
import { getItem } from '@/utils/storage';
const getters = {
  token: (state) => state.user.token,
  // 需要判断用户是否有，返回一个布尔值
  userInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}' //不等于{}返回true 反之返回false
  },
  userInfos: (state) => state.user.userInfo,
  cssVar: (state) => ({
    ...state.theme.variables,
    ...generateColors(getItem('themeColor'))
  }),
  sidebarOpened: state => state.app.sidebarOpened,
  language: (state) => state.app.language,
  themeColor: (state) => state.theme.themeColor,
  tagsViewList: (state) => state.app.tagsViewList
}
export default getters