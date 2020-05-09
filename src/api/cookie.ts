import Cookies from 'js-cookie'

const tokenKey = 'smail-book-Token'
/**
* 本地接口
*/
export const getToken = () => {
  return Cookies.get(tokenKey)
}

export const setToken = (token: string) => {
  return Cookies.set(tokenKey, token)
}

export const removeToken = () => {
  return Cookies.remove(tokenKey)
}