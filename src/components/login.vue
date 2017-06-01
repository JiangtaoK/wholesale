<template>
  <div class="login-area">
    <div class="logo"></div>
    <ul>
      <li><mt-field  placeholder="请输入用户名" autocomplete="off" v-model="username"></mt-field></li>
      <li><mt-field  placeholder="请输入密码" autocomplete="off" type="password" v-model="password"></mt-field></li>
      <li></li>
      <li><mt-button size="large" type="danger" @click.native="loginAction">登录</mt-button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created: function () {
    this.infoSomething()
  },
  methods: {
    infoSomething () {
      console.info('**********start****')
    },
    loginAction () {
      let loginInfo = {
        username: this.username,
        password: this.password
      }
      console.info('*******loginIn**')
      console.info(loginInfo)
      console.info(this.router)
      this.$router.push('home')
    }
  }
}
</script>

