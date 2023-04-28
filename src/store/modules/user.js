import { login, getUserInfo } from "@/api/sys"
import md5 from 'md5'
import { setItem, getItem } from "@/utils/storage"
import { TOKEN } from '@/constant'
export default {
  namespaced: true,
  state: () => {
    return {
      token: getItem(TOKEN) || '',
      userInfo: {}
    }
  },
  mutations: {
    setToken(state, token) {
      // vuex存储是为了在任意位置获取到数据
      state.token = token
      // 本地存储是为了实现token不过期 项目自动登录
      setItem(TOKEN, token)
      console.log(getItem(TOKEN));
    },
    saveUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    }
  },
  actions: {
    // 登录
    login({ commit }, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        }).then(res => {
          commit('setToken', res.token)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 获取用户信息
    async getUserInfo({ commit }) {
      const res = await getUserInfo()
      commit('saveUserInfo', res)
    }
  },
  getters: {}
}