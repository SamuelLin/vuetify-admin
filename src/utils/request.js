import axios from 'axios'
import { useUserStore } from '@/stores/user'

const service = axios.create({
  baseURL: '/api',
  timeout: 30 * 1000
})

// Add a request interceptor
service.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const userStore = useUserStore()
    config.headers.Authorization = `Bearer ${userStore.token}`
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
service.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // TODO: 401 or 403 error handling
    return Promise.reject(error)
  }
)

export default service
