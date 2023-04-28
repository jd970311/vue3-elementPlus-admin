// 1. 存储数据
export const setItem = (key, value) => {
  // value 有两种情况
  // 1. 基本数据
  // 2.复杂数据
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

// 获取数据
export const getItem = (key) => {
  const value = localStorage.getItem(key)
  // 判断value是否是对象
  try {
    return JSON.parse(value)
  } catch (err) {
    return value
  }
}

// 删除指定数据
export const removeItem = (key) => {
  localStorage.removeItem(key)
}

// 删除所有数据
export const removeAllItem = () => {
  localStorage.clear()
}