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
const app = createApp(App)
installElementPlus(app)
installApp(app) // 调用函数
app.use(store).use(router).mount('#app')
