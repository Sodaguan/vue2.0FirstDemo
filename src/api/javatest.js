import { post } from './axios'

export default function javatest (params) {
  return post('/loginUser', params)
}
