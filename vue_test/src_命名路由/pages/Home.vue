<template>
<div>
  <h2>我是Home的内容</h2>
  <ul class="nav nav-tabs">
    <li>
      <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
    </li>
    <li>
      <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
    </li>
  </ul>
  <div>
    <router-view></router-view>
  </div>
</div>     
</template>

<script>
// import News from './News'
// import Message from './Message'
export default {
  name:'Home',
  // components:{ News, Message }
};
</script>

<style>
</style>