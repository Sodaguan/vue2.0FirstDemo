<template>
  <div id="app" @click="resetSelection">
    <!--<router-link to=""></router-link>-->
    <appHeader></appHeader>
    <!--<HelloWorld></HelloWorld>-->
    <div class="app-content">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <appFooter></appFooter>
  </div>
</template>

<script>
  import appHeader from './components/header.vue'
  import appFooter from './components/footer.vue'
  import eventBus from './eventBus'

  export default {
    name: 'app',
    components: {appHeader, appFooter},
    methods: {
      resetSelection () {
        eventBus.$emit('resetSelection')
      }
    }
  }
</script>

<style>
  /* http://meyerweb.com/eric/tools/css/reset/
     v2.0 | 20110126
     License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    background: #f0f2f5;
    font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    font-size: 14px;
    color: #444;
  }

  .nav-pile {
    padding: 0 10px;
  }

  .container {
    width: 1200px;
    margin: 0 auto;
  }

  .hr {
    height: 1px;
    width: 100%;
    background: #ddd;
  }

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

