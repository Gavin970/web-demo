<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <h1>用户信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="sayHello">自我介绍</button>
</template>

<script>
// import { h } from 'vue';
export default {
  name: 'App',
  setup() {
    //数据
    let name = '张三';
    let age = '18';

    //方法
    function sayHello() {
      alert(`你好，我叫${name}，我${age}岁了。`);
    }

    //返回一个对象（常用）
    return {
      name,
      age,
      sayHello,
    };

    //返回一个函数（渲染函数）
    // return () => {
    //   return h('h1', 'sanbin');
    // };
  },
};
</script>

<style></style>
