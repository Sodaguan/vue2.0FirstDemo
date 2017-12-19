<template>
  <div class="app-head">
    <div class="app-head-inner">
      <img src="../assets/overwatch.png" alt="" class="head-logo">
      <div class="head-nav">
        <ul class="nav-list">
          <li v-if="username === ''" @click="logClick">登录</li>
          <li v-if="username !== ''">{{username}}</li>
          <li>丨</li>
          <li v-if="username === ''" @click="regClick">注册</li>
          <li v-if="username !== ''" @click="layoutClick">退出</li>
          <li>丨</li>
          <li @click="aboutClick">关于</li>
        </ul>
      </div>
    </div>
    <mydialog :isShow="isLogshow" @onclose="closeDialog('isLogshow')">
      <logdialog @sucLog="onSuclog"></logdialog>
    </mydialog>
    <mydialog :isShow="isRegshow" @onclose="closeDialog('isRegshow')">
      <p>slot reg</p>
    </mydialog>
    <mydialog :isShow="isAboutshow" @onclose="closeDialog('isAboutshow')">
      <p>
        本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。</p>
    </mydialog>
  </div>
</template>

<script>
  import mydialog from './dialog'
  import logdialog from './loginfrom'

  export default {
    data () {
      return {
        isLogshow: false,
        isRegshow: false,
        isAboutshow: false,
        username: ''
      }
    },
    components: {
      mydialog, logdialog
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
      },
      onSuclog (data) {
        console.log(data)
        this.username = data.username
        this.closeDialog('isLogshow')
      },
      layoutClick () {
        // 其实应该发送请求
        this.username = ''
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
