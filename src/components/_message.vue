<template>
  <div class="message">
    <div class="header">
      <span class="fl"></span>
      <span class="title">订货铺，自家货源</span>
      <span class="cart fr" ></span>
    </div>
    <div class="list">
      <ul>
        <li>
          <span class="ico">
            <img src="../assets/message01.png" alt=""/>
          </span>
          <span class="title">订单消息</span>
          <span class="title subtitle">供货商对订单、退单操作的通知</span>
          <span class="more fr">
            <img width="7" src="../assets/view_arrow.png" alt=""/>
          </span>
        </li>
        <li>
          <span class="ico">
            <img src="../assets/message05.png" alt=""/>
          </span>
          <span class="title">系统公告</span>
          <span class="title subtitle">系统平台的通知，例如：升级</span>
          <span class="more fr">
            <img width="7" src="../assets/view_arrow.png" alt=""/>
          </span>
        </li>
        <li>
          <span class="ico">
            <img src="../assets/message03.png" alt=""/>
          </span>
          <span class="title">留言咨询</span>
          <span class="title subtitle">可与供货商进行在线交流</span>
          <span class="more fr">
            <img width="7" src="../assets/view_arrow.png" alt=""/>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      value: '1'
    }
  },
  created: function () {
    let that = this
    setInterval(function () {
      console.info(that.value)
    }, 1000)
  },
  methods: {
    search ($event) {
      console.info(this.value)
    },
    watch: {
      value (n, o) {
        console.info(n)
        console.info(o)
      }
    }
  }
}
</script>
