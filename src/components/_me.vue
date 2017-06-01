<template>
  <div class="me">
    <div class="header">
      <span class="fl"></span>
      <span class="title">订货铺，自家货源</span>
      <span class="cart fr" ></span>
    </div>
    <div class="list">
      <ul>
        <li >
          <ul>
            <li>
              <span class="title">用户信息</span>
              <span class="more subtitle fr">
              <span>店掌柜</span>
              <img width="7" src="../assets/view_arrow.png" alt=""/>
              </span>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <span class="title">收货地址</span>
              <span class="more fr">
                <img width="7" src="../assets/view_arrow.png" alt=""/>
              </span>
            </li>
            <li>
              <span class="title">收货地址</span>
              <span class="more fr">
                <img width="7" src="../assets/view_arrow.png" alt=""/>
              </span>
            </li>
          </ul>
        </li>
        <li >
          <ul>
            <li>
              <span @click="out" class="out">退出登录</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'me',
  data () {
    return {

    }
  },
  created: function () {

  },
  methods: {
    out () {
      this.$router.push('/')
    }

  }
}
</script>
