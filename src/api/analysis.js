import { get, post } from './axios'

export function getPrice (params) {
  return get('/api/getPrice', params)
}

export function createOrder (params) {
  return post('/api/createOrder', params)
}
