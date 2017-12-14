<template>
  <div class="app-foot">
    <p>{{msg}}</p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        msg: '© 2016 fishenal MIT'
      }
    },
    created: function () {
      axios.post('/loginUser', 'username=admin&password=meritco&language=English')
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          if (err) {
            console.log(err)
          }
        })
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
