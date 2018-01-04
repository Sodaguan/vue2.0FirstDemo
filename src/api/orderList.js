import { post } from './axios'

export default function getOrderList (params) {
  return post('/api/getOrderList', params)
}
