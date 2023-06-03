import request from '@/utils/request'

// 获取项目功能
export const features = () => {
  return request({
    url: '/user/feature'
  })
}

// 获取章节模块
export const chapter = () => {
  return request({
    url: '/user/chapter'
  })
}
