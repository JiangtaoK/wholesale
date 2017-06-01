<template>
  <div class="order">
    <div class="header">
      <span class="fl"></span>
      <span class="title">订货铺，自家货源</span>
      <span class="cart fr" ></span>
    </div>
    <div class="tab search">
      <span class="search" ><img src="../assets/search_white.png" alt=""/>订单号 / 商品名称</span>
      <span class="fr" ><img src="../assets/filter.png" alt=""/>筛选</span>
    </div>
    <div class="list">
      <ul>
        <li v-for="(data,$index) in goods">
          <p><span class="fl"></span><span class="style fl">DH-20160717-0005{{$index}}</span><span class="fr">待审核</span></p>
          <p class="space"></p>
          <p><span>订单金额</span><span>{{data.price * $index}}.00</span></p>
          <p><span>商品数量</span><span>{{data.price /100+3*$index}}种</span></p>
          <p><span>下单时间</span><span>{{new Date().toLocaleDateString()}} {{new Date().toTimeString().substr(0,8)}}</span></p>
          <span class="pay" v-if="$index==2">付款</span>
          <p class=""></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import goodsData from '../json/goods.json'

export default {
  name: 'home',
  data () {
    return {
      selected: '1',
      goods: goodsData
    }
  },
  created: function () {

  },
  methods: {

  }
}
</script>
