<template>
  <div class="g-form">
    <div class="g-form-line">
      <span class="g-form-label">用户名：</span>
      <div class="g-form-input">
        <input type="text" placeholder="请输入用户名" v-model="username">
      </div>
      <span class="g-form-error">{{usernameErrors.errorText}}</span>
    </div>
    <div class="g-form-line">
      <span class="g-form-label">密码：</span>
      <div class="g-form-input">
        <input type="password" placeholder="请输入密码" v-model="password">
      </div>
      <span class="g-form-error">{{passwordErrors.errorText}}</span>
    </div>
    <div class="g-form-line">
      <div class="g-form-btn">
        <a class="button" @click="loginClick">登陆</a>
        <span>{{this.errorText}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import loginApi from '../api/dialog'

  export default {
    data () {
      return {
        username: '',
        password: '',
        errorText: ''
      }
    },
    methods: {
      loginClick () {
        console.log(this.username, this.password)
        if (!this.usernameErrors.status || !this.passwordErrors.status) {
          this.errorText = '用户名或密码不符合规定'
        } else {
          this.errorText = ''
          // 使用自己封住的axios的get方法
          loginApi({
            username: this.username,
            password: this.password
          }).then(res => {
            console.log(res)
            this.$emit('sucLog', res)
          }).catch(err => {
            console.log(err)
          })
        }
      }
    },
    computed: {
      usernameErrors () {
        let errorText, status
        if (!/@/g.test(this.username)) {
          status = false
          errorText = '用户名不包含@'
        } else {
          status = true
          errorText = ''
        }
        if (!this.usernameFlag) {
          errorText = ''
          this.usernameFlag = true
        }
        return {
          status, errorText
        }
      },
      passwordErrors () {
        let errorText, status
        if (!/^\w{1,6}$/g.test(this.password)) {
          status = false
          errorText = '密码小于或大于6位'
        } else {
          status = true
          errorText = ''
        }
        if (!this.passwordFlag) {
          errorText = ''
          this.passwordFlag = true
        }
        return {
          status, errorText
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .button {
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }

  .button:hover {
    background: #4fc08d;
  }

  .g-form {

  }

  .g-form-line {
    padding: 15px 0;
  }

  .g-form-label {
    width: 100px;
    font-size: 16px;
    display: inline-block;
  }

  .g-form-input {
    display: inline-block;
  }

  .g-form-input input {
    height: 30px;
    width: 200px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #ccc;
  }

  .g-form-btn {
    padding-left: 100px;
  }

  .g-form-error {
    color: red;
    padding-left: 15px;
  }
</style>
