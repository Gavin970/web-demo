<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <h1>用户信息</h1>
  <h2>姓名：{{ user.name }}</h2>
  <h2>年龄：{{ user.age }}</h2>
  <h2>职业：{{ user.job.type }}</h2>
  <h2>薪资：{{ user.job.salary }}</h2>
  <h2>爱好：{{ user.hobby }}</h2>
  <button @click="changeInfo">修改用户信息</button>
</template>

<script>
// import { h } from 'vue';
import { reactive } from 'vue';
export default {
  name: 'App',
  setup() {
    //数据
    let user = reactive({
      name: '张三',
      age: 18,
      job: {
        type: '前端工程师',
        salary: '20k',
      },
      hobby: ['吃饭', '睡觉', '打豆豆']
    })

    //方法
    function changeInfo() {
      user.name = '豆豆';
      user.age = 19;
      user.job.type = '高级前端工程师';
      user.job.salary = '30k';
      user.hobby[2] = '学习';
    }

    //返回一个对象（常用）
    return {
      user,
      changeInfo
    };
  },
};
</script>

<style></style>
