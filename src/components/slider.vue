<template>
  <div class="slide-show" @mouseover="clearInterval" @mouseout="runInterval">
    <div class="slide-img">
      <a :href="sliders[nowIndex].href">
        <transition name="slide-trans">
          <img v-if="isShow" :src="sliders[nowIndex].src" alt="">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="sliders[nowIndex].src" alt="">
        </transition>
      </a>
      <h2>{{sliders[nowIndex].title}}</h2>
    </div>

    <ul class="slide-pages">
      <li @click="gotoIndex(prevIndex)">&lt;</li>
      <li v-for="(item, index) in sliders" @click="gotoIndex(index)">
        <span>{{index + 1}}</span>
      </li>
      <li @click="gotoIndex(nextIndex)">&gt;</li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      sliders: {
        type: Array,
        default: []
      },
      sliderSpeed: {
        type: Number,
        default: 1000
      }
    },
    data () {
      return {
        nowIndex: 0,
        interval: '',
        isShow: true
      }
    },
    computed: {
      prevIndex () {
        if (this.nowIndex === 0) {
          return this.sliders.length - 1
        } else {
          return this.nowIndex - 1
        }
      },
      nextIndex () {
        if (this.nowIndex === this.sliders.length - 1) {
          return 0
        } else {
          return this.nowIndex + 1
        }
      }
    },
    methods: {
      gotoIndex (index) {
        this.isShow = false
        setTimeout(() => {
          this.isShow = true
          this.nowIndex = index
          this.$emit('onchange')
        }, 10)
      },
      runInterval () {
        this.interval = setInterval(() => {
          this.gotoIndex(this.nextIndex)
        }, this.sliderSpeed)
      },
      clearInterval () {
        clearInterval(this.interval)
      }
    },
    mounted () {
      this.runInterval()
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
