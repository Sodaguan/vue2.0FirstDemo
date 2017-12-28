<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li v-for="(item,index) in selections" @click="toggleSelection(index)" :class="{active:checkActive(index)}">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        nowIndexes: [0]
      }
    },
    props: {
      selections: {
        type: Array,
        default: [{
          label: 'test',
          value: 0
        }]
      }
    },
    methods: {
      toggleSelection (index) {
        // 不在数组里push，在里面remove
        if (this.nowIndexes.indexOf(index) === -1) {
          this.nowIndexes.push(index)
        } else {
          this.nowIndexes.splice(this.nowIndexes.indexOf(index), 1)
        }
        let nowObjArr = []
        for (let i = 0; i < this.nowIndexes.length; i++) {
          nowObjArr.push(this.selections[i])
        }
        // console.log(nowObjArr)
        this.$emit('onchange', nowObjArr)
      },
      checkActive (index) {
        return this.nowIndexes.indexOf(index) !== -1
      }
    }
  }
</script>

<style scoped>
  .chooser-component {
    position: relative;
    display: inline-block;
  }

  .chooser-list li {
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
  }

  .chooser-list li.active {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }
</style>
