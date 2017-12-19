<template>
  <div class="app-foot">
    <p>{{msg}}</p>
  </div>
</template>

<script>
  // import axios from 'axios'
  // import Qs from 'qs'
//  import javatest from '../api/javatest'

  export default {
    data () {
      return {
        msg: '© 2016 fishenal MIT'
      }
    },
    created: function () {
      // axios.post('/loginUser',
      //   {
      //     username: 'admin',
      //     password: 'meritco',
      //     language: 'English'
      //   },
      //   {
      //     transformRequest: [function (data) {
      //       // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
      //       data = Qs.stringify()
      //       return data
      //     }]
      //   })
      //   .then((res) => {
      //     console.log(res)
      //   })
      //   .catch((err) => {
      //     if (err) {
      //       console.log(err)
      //     }
      //   })
      // axios({
      //   url: '/loginUser',
      //   method: 'post',
      //   data: {
      //     username: 'admin',
      //     password: 'meritco',
      //     language: 'English'
      //   },
      //   transformRequest: [function (data) {
      //     // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
      //     data = Qs.stringify()
      //     return data
      //   }]
      // })
      //   .then((res) => {
      //     console.log(res)
      //   })
      //   .catch((err) => {
      //     if (err) {
      //       console.log(err)
      //     }
      //   })
      /* javatest({
        username: 'admin',
        password: 'meritco',
        language: 'English'
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      }) */
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .app-foot {
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    margin-top: 30px;
  }
</style>
