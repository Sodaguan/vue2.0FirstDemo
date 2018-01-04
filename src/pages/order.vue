<template>
  <div class="order-wrap">
    <h3>您的产品</h3>
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品：
        <v-selection :selections="products" @onchange="productChange"></v-selection>
      </div>
      <div class="order-list-option">
        选择产品：
        <v-selection :selections="products" @onchange="productChange"></v-selection>
      </div>
      <div class="order-list-option">
        开始日期：
        <el-date-picker
          v-model="startDate"
          type="date"
          placeholder="选择日期"
          value-format="yyyyMMdd">
        </el-date-picker>
      </div>
      <div class="order-list-option">
        结束日期：
        <el-date-picker
          v-model="endDate"
          type="date"
          placeholder="选择日期"
          value-format="yyyyMMdd">
        </el-date-picker>
      </div>
      <div class="order-list-option">
        关键词：
        <input type="text" v-model.lazy="query" class="order-query">
      </div>
    </div>
    <div class="order-list-table">
      <table>
        <tr>
          <th v-for="head in tableHeads" @click="changeOrderType(head)" :class="{active:head.active}">{{ head.label }}
          </th>
        </tr>
        <tr v-for="item in tableData" :key="item.period">
          <td v-for="head in tableHeads">{{ item[head.key] }}</td>
        </tr>
      </table>
    </div>
    <el-pagination
      layout="prev, pager, next"
      :total="500">
    </el-pagination>

  </div>
</template>

<script>
  import VSelection from '../components/base/selection'

  export default {
    data () {
      return {
        query: '',
        productId: 0,
        startDate: '',
        endDate: '',
        products: [
          {
            label: '数据统计',
            value: 0
          },
          {
            label: '数据预测',
            value: 1
          },
          {
            label: '流量分析',
            value: 2
          },
          {
            label: '广告发布',
            value: 3
          }
        ],
        tableHeads: [
          {
            label: '订单号',
            key: 'orderId',
            active: false
          },
          {
            label: '购买产品',
            key: 'product',
            active: false
          },
          {
            label: '版本类型',
            key: 'version',
            active: false
          },
          {
            label: '有效时间',
            key: 'period',
            active: false
          },
          {
            label: '购买日期',
            key: 'date',
            active: false
          },
          {
            label: '数量',
            key: 'buyNum',
            active: false
          },
          {
            label: '总价',
            key: 'amount',
            active: false
          }
        ],
        currentOrder: false
        // tableData: []
      }
    },
    methods: {
      productChange (obj) {
        this.$store.commit('updateParams', {
          key: 'productId',
          val: obj.value
        })
        // this.productId = obj.value
      },
      changeOrderType (headItem) {
        // 常用清除别的样式，给选中的加样式
        this.tableHeads.map((item) => {
          item.active = false
          return item
        })
        headItem.active = true
        // 排序,未实现
        // this.tableData.map((item) => {
        //   console.log(item[headItem.key])
        //   item[headItem.key].sort(this.sortNumber)
        // })
        // this.tableData[headItem.key].sort(this.sortNumber)
      }
    },
    components: {
      VSelection
    },
    watch: {
      startDate (val, oldval) {
        console.log(val)
        if (val !== oldval) {
          this.$store.commit('updateParams', {
            key: 'startDate',
            val: val
          })
        }
      },
      endDate (val, oldval) {
        console.log(val)
        if (val !== oldval) {
          this.$store.commit('updateParams', {
            key: 'endDate',
            val: val
          })
        }
      },
      query (val, oldval) {
        if (val !== oldval) {
          this.$store.commit('updateParams', {
            key: 'query',
            val: val
          })
        }
      }
    },
    mounted () {
      // this.getList()
      console.log(this.$store)
      this.$store.dispatch('fetchOrderList')
    },
    computed: {
      tableData () {
        return this.$store.getters.getOrderList
      }
    }
  }
</script>

<style scoped>
  .order-wrap {
    width: 1200px;
    min-height: 800px;
    margin: 20px auto;
    overflow: hidden;
  }

  .order-wrap h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .order-query {
    height: 25px;
    line-height: 25px;
    border: 1px solid #e3e3e3;
    outline: none;
    text-indent: 10px;
  }

  .order-list-option {
    display: inline-block;
    padding-left: 15px;
  }

  .order-list-option:first-child {
    padding-left: 0;
  }

  .order-list-table {
    margin-top: 20px;
  }

  .order-list-table table {
    width: 100%;
    background: #fff;
  }

  .order-list-table td,
  .order-list-table th {
    border: 1px solid #e3e3e3;
    text-align: center;
    padding: 10px 0;
  }

  .order-list-table th {
    background: #4fc08d;
    color: #fff;
    border: 1px solid #4fc08d;
    cursor: pointer;
  }

  .order-list-table th.active {
    background: #35495e;
  }
</style>
