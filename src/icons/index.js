// webpack模块化导入
import SvgIcon from '@/components/SvgIcon'
const svgRequire = require.context('./svg', false, /\.svg$/)
svgRequire.keys().forEach(svgIcon => {
  svgRequire(svgIcon);
})
// 全局注册
export default app => {
  app.component('SvgIcon', SvgIcon)
}