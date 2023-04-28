/**
 * 判断图标是否为外部资源
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path) //返回一个布尔值
}
