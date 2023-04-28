import { setItem, getItem } from '@/utils/storage'
// 被动退出的主动处理
// 1. 获取登录时间戳
export const getTimeStamp = () => {
  return getItem('loginTime')
}

// 设置登录时间
export const setTimeStamp = () => {
  return setItem('loginTime', Date.now())
}

// 定义 token 失效时间 为 2 天
const timeOut = 2 * 3600 * 1000

// 判断token是否超时 失效，用当前请求时间 - 登录时间 看是否大于设置的过效时间
export const isCheckTimeout = () => {
  return Date.now() - getTimeStamp() > timeOut
} 
