/**
 * 请求模块
 */
import axios from 'axios'

const request = axios.create({
  baseURL: ' http://ttapi.research.itcast.cn/'
})

// 请求拦截器
// 相应拦截器
// 导出
export default request
