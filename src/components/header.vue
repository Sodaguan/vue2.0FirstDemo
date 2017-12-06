<template>
  <div class="app-head">
    <div class="app-head-inner">
      <img src="../assets/overwatch.png" alt="" class="head-logo">
      <div class="head-nav">
        <ul class="nav-list">
          <li>登录</li>
          <li>丨</li>
          <li>注册</li>
          <li>丨</li>
          <li>关于</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Header'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .app-head {
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
    .app-head-inner {
      width: 1200px;
      margin: 0 auto;
      .head-logo {
        float: left;
        height: 90px;
      }
      .head-nav {
        float: right;
        .nav-list {
          overflow: hidden;
          li {
            float: left;
            cursor: pointer;
          }
        }
      }
    }
  }

</style>
