<template>
  <div id="app">
<!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
<!--    <router-link to="/info" tag="button" replace>内容</router-link>-->
    <button @click="clickHome">首页</button>
    <button @click="clickInfo">内容</button>
    <button @click="clickUser">用户</button>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      userId: 'lzq'
    }
  },
  methods: {
    clickHome(){
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    clickInfo(){
      // this.$router.push('/info')
      this.$router.replace('/info')
    },
    clickUser(){
      this.$router.replace('/user/' + this.userId)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
