// 快捷访问样式
import variables from '@/styles/variables.module.scss';
const getters = {
  token: (state) => state.user.token,
  // 需要判断用户是否有，返回一个布尔值
  userInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}' //不等于{}返回true 反之返回false
  },
  userInfos: (state) => state.user.userInfo,
  cssVar: (state) => variables,
  sidebarOpened: state => state.app.sidebarOpened
}
export default getters