const getters = {
  token: (state) => state.user.token,
  // 需要判断用户是否有，返回一个布尔值
  userInfo: (state) => {
    return JSON.stringify(state.user.UserInfo) !== '{}' //不等于{}返回true 反之返回false
  }
}
export default getters