<template>
  <div>
    <h2>我是用户</h2>
    <p>我是用户，嘿嘿嘿</p>
    <p>{{userId}}</p>
  </div>
</template>

<script>
  export default {
    name: "user",
    computed: {
      userId(){
        return this.$route.params.userId//当前的路由对象，获取到的是路由的值
      }
    }
  }
</script>

<style scoped>

</style>