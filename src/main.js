import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import '@/styles/index.scss'
//导入icons中的函数
import installApp from '@/icons/index.js'
// 导入 路由权限
import '@/permission.js'
// 国际化语言
import i18n from '@/i18n'
const app = createApp(App)
installElementPlus(app)
installApp(app) // 调用函数
app.use(store).use(router).use(i18n).mount('#app')
