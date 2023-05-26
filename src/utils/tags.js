const whiteList = ['/login', '/404', '/401']

export const isTags = (tag) => {
  return !whiteList.includes(tag)
}