<template>
  <div class="slide-show">
    <div class="slide-img">
      <a :href="sliders[nowIndex].href">
        <img :src="sliders[nowIndex].src" alt="">
      </a>
      <h2>{{sliders[nowIndex].title}}</h2>
    </div>

    <ul class="slide-pages">
      <li>&lt;</li>
      <li v-for="(item, index) in sliders" @click="gotoIndex(index)">
        <span>{{index + 1}}</span>
      </li>
      <li>&gt;</li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      sliders: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        nowIndex: 0
      }
    },
    methods: {
      gotoIndex (index) {
        this.nowIndex = index
      }
    }
  }
</script>

<style scoped lang="less">

  .slide-trans-enter-active {
    transition: all .5s;
  }

  .slide-trans-enter {
    transform: translateX(900px);
  }

  .slide-trans-old-leave-active {
    transition: all .5s;
    transform: translateX(-900px);
  }

  .slide-show {
    position: relative;
    margin: 15px 15px 15px 0;
    width: 900px;
    height: 500px;
    overflow: hidden;
  }

  .slide-show h2 {
    position: absolute;
    width: 100%;
    height: 30px;
    color: #fff;
    background: #000;
    opacity: .5;
    bottom: 0;
    text-align: left;
    padding-left: 15px;
  }

  .slide-img {
    width: 100%;
  }

  .slide-img img {
    width: 100%;
    position: absolute;
    top: 0;
  }

  .slide-pages {
    position: absolute;
    bottom: 10px;
    right: 15px;
  }

  .slide-pages li {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    color: #fff;
  }

  .slide-pages li .on {
    text-decoration: underline;
  }
</style>
