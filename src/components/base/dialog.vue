<template>
  <div class="dialog-wrap" v-if="isShow">
    <div class="dialog-cover" @click="closeDialog"></div>
    <div class="dialog-content">
      <span class="dialog-close" @click="closeDialog">×</span>
      <slot>slot default</slot>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        hello: 123
      }
    },
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closeDialog () {
        this.$emit('onclose')
      }
    }
  }
</script>

<style scoped lang="less">
  .drop-enter-active {
    transition: all .5s ease;
  }

  .drop-leave-active {
    transition: all .3s ease;
  }

  .drop-enter {
    transform: translateY(-500px);
  }

  .drop-leave-active {
    transform: translateY(-500px);
  }

  .dialog-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .dialog-cover {
    background: #000;
    opacity: .3;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .dialog-content {
    width: 50%;
    position: fixed;
    max-height: 50%;
    overflow: auto;
    background: #fff;
    top: 20%;
    left: 50%;
    margin-left: -25%;
    z-index: 10;
    border: 2px solid #464068;
    padding: 2%;
    line-height: 1.6;
  }

  .dialog-close {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
  }

  .dialog-close:hover {
    color: #4fc08d;
  }
</style>
