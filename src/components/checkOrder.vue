<template>
  <div>
    <mydialog :isShow="isShowCheckDialog" @onclose="checkPayStatus">
      请检查你的支付状态！
      <div class="button" @click="checkPayStatus">
        支付成功
      </div>
      <div class="button" @click="checkPayStatus">
        支付失败
      </div>
    </mydialog>
    <mydialog :isShow="isShowSuccessDialog" @onclose="toOrderList">
      购买成功
    </mydialog>
    <mydialog :isShow="isShowFailDialog" @onclose="toOrderList">
      购买失败
    </mydialog>
  </div>
</template>

<script>
  import mydialog from './base/dialog'

  export default {
    name: 'check-order',
    components: {
      mydialog
    },
    props: {
      isShowCheckDialog: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        isShowSuccessDialog: false,
        isShowFailDialog: false
      }
    },
    methods: {
      checkPayStatus () {
        // 应该发送请求，然后关闭模态框
        // 不能修改从父组件传递的值,只能通过$emit
        // this.isShowCheckDialog = false
        this.$emit('onclose')
        this.isShowSuccessDialog = true
      },
      toOrderList () {
        this.isShowFailDialog = false
        this.$router.push({path: '/orderList'})
      }
    }
  }
</script>

<style scoped>

</style>
