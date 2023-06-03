import axios from 'axios'
import store from '@/store'
import { ElMessage } from 'element-plus'
import { isCheckTimeout } from '@/utils/auth'
import md5 from 'md5'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {
  const { icode, time } = getTestICode()
  config.headers.icode = icode
  config.headers.codeType = time
  // 在发送请求之前对token做统一处理,如果有token,请求头加上token,
  if (store.getters.token) {
    config.headers.Authorization = `Bearer ${store.getters.token}`
    // 主动介入  如果 token 超时失效 就会调用退出登录
    if (isCheckTimeout()) {
      //isCheckTimeout 为true 超时 false没有超时
      store.dispatch('user/logout')
      return Promise.reject(new Error('token 失效'))
    }
  }
  // 处理国际化语言请求
  config.headers['Accept-Language'] = store.getters.language
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
})

// 请求响应器
service.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  const { data, success, message } = response.data
  if (success) {
    ElMessage.success(message)
    return data
  } else {
    // 业务错误
    ElMessage.error(message)
    return Promise.reject(new Error(message))
  }
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  // 被动处理 token 超时问题
  if (error.response && error.response.data && error.response.data.code === 401) {
    store.dispatch('user/logout')
  }
  ElMessage.error(error.message)
  return Promise.reject(error);
});
/**
 * 返回 Icode 的实现
 */
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991-12-30'
  return {
    icode: md5(code),
    time: now
  }
}
export default service
