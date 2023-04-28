import router from '@/router'
import store from '@/store'
// 定义白名单,用户没有任何权限也可以进入的页面
const whiteList = ['/login']
router.beforeEach(async (to, from, next) => {
  // 1. 用户已登录有token token没有过期 不允许进入login
  // 2. 用户未登录没有token 只允许进入 login
  // 有toke 已登陆
  if (store.getters.token) {
    // 用户登录不允许在进入login
    if (to.path === '/login') {
      next('/')
    } else {
      // 如果去其他页面，就需要携带token发其请求，所以我们在请求拦截器做了统一处理携带token,携带token发起请求就会获取用户信息，所以此时我们需要判断用户信息是否存在，如果不存在 就需要获取用户信息
      if (!store.getters.userInfo) {
        await store.dispatch('user/getUserInfo') //store.dispatch是一个异步函数async await 
      } else {
        next()
      }
    }
  } else {
    // 没有登录 看去的路径是不是白名单里面的路径 是就放行 不是就退回到登录页面
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})