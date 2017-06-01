<template>
  <div class="all">
    <div class="header">
      <span class="fl"></span>
      <span class="search" ><img src="../assets/search_white.png" alt=""/>商品名称 / 编号</span>
      <span class="cart fr" ></span>
    </div>
    <ul class="tab">
      <li @click="getListByTab(data.cd)" v-for="(data,$index) in tab">
        <span class="style" v-if="$index==tabIndex">{{data.dscp}}</span>
        <span v-if="$index!=tabIndex">{{data.dscp}}</span>
      </li>
    </ul>
    <div>
      <div class="section fl">
        <ul>
          <li v-for="data in section"><span>{{data.dscp}}</span></li>
        </ul>
      </div>
      <div class="goods fr page-infinite-wrapper">
        <ul>
          <li v-for="(data,$index) in goods">
            <div>
              <img src="../assets/t0_20160614_444_356.png" alt=""/>
              <div class="fr">
                <p>{{data.dscp}}</p>
                <p v-if="$index%2==0"><span class="style">{{data.price}}</span>/{{data.unit}}</p>
                <p v-if="$index%2!=0"><span class="style">{{data.price}}</span>/台</p>
              </div>
            </div>
            <div>
              <p v-if="$index%2==0">充足</p>
              <p v-if="$index%2!=0">缺货</p>
              <p class="numBox"><span @click="sub(data)"></span><input type="number" v-model="data.num"/><span @click="plus(data)"></span></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import sectionData from '../json/section.json'
import goodsData from '../json/goods.json'

export default {
  name: 'home',
  data () {
    return {
      tabIndex: 0,
      selected: '1',
      tab: [
        {
          cd: 0,
          dscp: '综合'
        },
        {
          cd: 1,
          dscp: '销量'
        },
        {
          cd: 2,
          dscp: '价格'
        },
        {
          cd: 3,
          dscp: '筛选'
        }
      ],
      section: sectionData,
      goods: goodsData
    }
  },
  created: function () {
    console.info(sectionData)
  },
  methods: {
    plus (data) {
      console.info(data.num)
      data.num = data.num * 1 + 1
      console.info(data.num)
    },
    sub (data) {
      data.num = data.num * 1 <= 0 ? 0 : data.num * 1 - 1
    },
    getListByTab (cd) {
      let that = this
      this.tabIndex = cd
      this.goods = []
      setTimeout(function () {
        that.goods = goodsData
      }, 400)
    }
  }
}
</script>
