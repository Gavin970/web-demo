<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <h1>用户信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>职业：{{ job.type }}</h2>
  <h2>薪资：{{ job.salary }}</h2>
  <button @click="changeInfo">修改用户信息</button>
</template>

<script>
// import { h } from 'vue';
import { ref } from 'vue';
export default {
  name: 'App',
  setup() {
    //数据
    let name = ref('张三');
    let age = ref(18);
    let job = ref({
      type: '前端工程师',
      salary: '20k',
    });

    //方法
    function changeInfo() {
      name.value = '伞兵';
      age.value = 19;
      job.value.type = '高级前端工程师';
      job.value.salary = '30k';
      console.log(job);
    }

    //返回一个对象（常用）
    return {
      name,
      age,
      changeInfo,
      job,
    };
  },
};
</script>

<style></style>
