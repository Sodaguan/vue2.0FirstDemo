import { get } from './axios'

export default function getPrice (params) {
  return get('/api/getPrice', params)
}
