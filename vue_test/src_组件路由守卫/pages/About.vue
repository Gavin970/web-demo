<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name:'About',
  
  // 通过路由规则，进入该组件时被调用 
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter');
    if (localStorage.getItem('type') === '1') {
      next();
    } else {
      alert('抱歉，您没有权限查看该内容！')
    }
  },
  // 通过路由规则，离开该组件时被调用 
  beforeRouteLeave (to, from, next) {
    console.log('beforeRouteLeave');
    next();
  }
};
</script>

<style>
</style>