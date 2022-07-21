<template>
  <h1>数字：{{num}}</h1>
  <button @click="num++">点我+1</button>
  <br>
  <h1>姓名：{{user.name}}</h1>
  <h1>年龄：{{user.age}}</h1>
  <button @click="user.name += '~'">修改姓名</button>
  <button @click="user.age++">修改年龄</button>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import { watch, watchEffect } from '@vue/runtime-core';
export default {
  name: 'App',
  setup() {
    let num = ref(0);
    const user = reactive({
      name: 'zhangsan',
      age: 18
    });

    // watch(user, (newValue, oldValue) => {
    //   console.log(newValue,oldValue);
    // }, { deep: true })
    watchEffect(() => {
      let number = num.value;
      const userInfo = user.name;
      console.log("watchEffect");
    });

    return { 
      user,
      num
    };
  }
};
</script>

<style scoped>
  
</style>
