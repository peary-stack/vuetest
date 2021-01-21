<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页哈哈哈</p>
    <button @click="homeNews">新闻</button>
    <button @click="homeMessage">消息</button>
<!--    <router-link to="/home/news">新闻</router-link>-->
<!--    <router-link to="/home/message">消息</router-link>-->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "home",
    methods: {
      homeNews(){
        this.$router.replace('/home/news')
      },
      homeMessage(){
        this.$router.replace('/home/message')
      }
    }
  }
</script>

<style scoped>

</style>