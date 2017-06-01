<template>
  <div class="home">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <all></all>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <order></order>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <message></message>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <me ></me>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="1" >
        <img slot="icon" v-if="selected==1" src="../assets/bar_all_select.png">
        <img slot="icon" v-if="selected!=1" src="../assets/bar_all.png">
        分类
      </mt-tab-item>
      <mt-tab-item id="2">
        <img slot="icon" v-if="selected==2" src="../assets/bar_order_select.png">
        <img slot="icon" v-if="selected!=2" src="../assets/bar_order.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="3">
        <img slot="icon" v-if="selected==3" src="../assets/bar_message_select.png">
        <img slot="icon" v-if="selected!=3" src="../assets/bar_message.png">
        消息
      </mt-tab-item>
      <mt-tab-item id="4">
        <img slot="icon" v-if="selected==4" src="../assets/bar_me_select.png">
        <img slot="icon" v-if="selected!=4" src="../assets/bar_me.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>

import all from '@/components/_all'
import order from '@/components/_order'
import message from '@/components/_message'
import me from '@/components/_me'
export default {
  name: 'home',
  data () {
    return {
      selected: '1'
    }
  },
  components: {all, order, message, me},
  created: function () {

  },
  methods: {

  }
}
</script>
