import axios from 'axios'
const service = axios.create({
  timeout: 5000 // 请求超时时间
})
axios.defaults.withCredentials = false
// request拦截器
service.interceptors.request.use(
  config => {
    // config.headers['apiKey'] = '123456'
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    // alert(response.config.url)
    return response.data
  },
  error => {
    if (error.response.status === 504 || error.response.status === 404) {
      console.log(404)
    } else if (error.response.status === 500) {
      console.log(500)
    } else if (error.response.status === 403) {
      console.log(403)
    } else if (error.response.status === 401) {
      console.log(401)
    } else {

    }
    return Promise.reject(error)
  }
)

export default service
