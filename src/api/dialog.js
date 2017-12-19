// 本地数据用get请求
import { get } from './axios'

export default function login (params) {
  return get('/api/login', params)
}
// export default {
//   login (params) {
//     return post('/api/login', params)
//   }
// }
