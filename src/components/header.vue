<template>
  <div class="app-head">
    <div class="app-head-inner">
      <img src="../assets/overwatch.png" alt="" class="head-logo">
      <div class="head-nav">
        <ul class="nav-list">
          <li @click="logClick">登录</li>
          <li>丨</li>
          <li @click="regClick">注册</li>
          <li>丨</li>
          <li @click="aboutClick">关于</li>
        </ul>
      </div>
    </div>
    <mydialog :isShow="isLogshow" @onclose="closeDialog('isLogshow')">
      <p>slot log</p>
    </mydialog>
    <mydialog :isShow="isRegshow" @onclose="closeDialog('isRegshow')">
      <p>slot reg</p>
    </mydialog>
    <mydialog :isShow="isAboutshow" @onclose="closeDialog('isAboutshow')">
      <p>slot about</p>
    </mydialog>
  </div>
</template>

<script>
  import mydialog from './dialog'

  export default {
    data () {
      return {
        isLogshow: false,
        isRegshow: false,
        isAboutshow: false
      }
    },
    components: {
      mydialog
    },
    methods: {
      logClick () {
        this.isLogshow = true
      },
      regClick () {
        this.isRegshow = true
      },
      aboutClick () {
        this.isAboutshow = true
      },
      closeDialog (attr) {
        this[attr] = false
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
