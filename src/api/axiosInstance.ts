import axios from 'axios'
import { getToken } from './cookie'
import { eventMethods } from '@/components/toast/eventService'

const axiosQequest = axios.create({
  baseURL: 'https://www.amipei.xyz',
  timeout: 5000
})

axiosQequest.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['Authorization'] = `Bearer ${getToken()}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axiosQequest.interceptors.response.use(
  response => {
    const res = response.data

    return res
  },
  error => {
    if (error === undefined || error.code === 'ECONNABORTED') {
      eventMethods.notify('服务请求超时')
      return Promise.reject(error)
    }
    if (error.response.status === 500) {
      eventMethods.notify("服务器出问题，请稍后尝试")
      return Promise.reject(error)
    }

    return Promise.reject(error)
  }
)

export default axiosQequest