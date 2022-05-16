<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keywords"
      />&nbsp;
      <button @click="sendUserInfo">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keywords: "",
    };
  },
  methods: {
    sendUserInfo() {
      if (this.keywords.length !== 0) {
        //`https://api.github.com/search/users?q=${this.keywords}`
        axios
          .get(`https://api.github.com/search/users?q=${this.keywords}`)
          .then(
            (response) => {
              // console.log("请求成功了", response.data);
              this.$bus.$emit("getUserInfo", response.data.items);
            },
            (error) => {
              alert("请求失败了" + error.message);
            }
          );
      } else {
        alert("您输入的内容为空");
      }
    },
  },
};
</script>

<style>
</style>