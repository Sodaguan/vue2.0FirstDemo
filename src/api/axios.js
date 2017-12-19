import axios from 'axios'

export function objToStr (obj) {
  let arr = []
  for (let key in obj) {
    arr.push(key + '=' + obj[key])
  }
  return arr.join('&')
}

export function post (url, params) {
  return new Promise((resolve, reject) => {
    let str = ''
    console.log(JSON.stringify(params))
    str = objToStr(params)
    axios.post(url, str)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(res => {
        resolve(res.data)
      }, err => {
        reject(err)
      })
  })
}
