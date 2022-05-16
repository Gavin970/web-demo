<template>
  <div>
    <button @click="getStudentInfo">获取学生信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStudentInfo() {
      axios.get("https://github.com/search?q=test&type=users").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
  },
};
</script> 

<style>
</style>