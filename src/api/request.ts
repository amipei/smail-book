import axiosQequest from './axiosInstance'

/**
 * 用户相关
 */
export const sendSmsCodeRequest = (phone: string) => {
  return axiosQequest.post('/sms', { phone })
}
export const loginRequest = (phone: string, code: string) => {
  return axiosQequest.post('/session', { phone, code })
}
export const logoutRequest = () => {
  return axiosQequest.delete('/session')
}
export const getUserInfoRequest = () => {
  return axiosQequest.get(`/user/detail`)
}
export const getUserTimerShaftRequest = () => {
  return axiosQequest.get(`/user/timer-shaft`)
}
/**
 * 用户书库信息相关
 */
export const getUserLibraryCountRequest = () => {
  return axiosQequest.get(`/user/library-count`)
}
export const getUserFavesPressRequest = () => {
  return axiosQequest.get(`/user/faves/library-press`)
}
export const getUserFavesAuthorRequest = () => {
  return axiosQequest.get(`/user/faves/library-author`)
}
/**
 * 用户书库搜索
 */
export const getSearchRequest = (keyword: string) => {
  return axiosQequest.get(`/search/q=${keyword}`)
}
/** 
 * 书籍操作相关(用户相关)
 */
export const getBookInfoRequest = (isbn: string) => {
  return axiosQequest.get(`/books/isbn/${isbn}`)
}
//批量添加
export const addBooksRequst = (isbns: string[]) => {
  return axiosQequest.post(`/user/books`, { isbns })
}

