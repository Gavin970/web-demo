<template>
  <h1>姓名：{{user.name}}</h1>
  <h1>年龄：{{user.age}}</h1>
  <button @click="user.name += '~'">修改姓名</button>
  <button @click="user.age++">修改年龄</button>
</template>

<script>
import { ref } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';
export default {
  name: 'App',
  setup() {
    const user = ref({
      name: 'zhangsan',
      age: 18
    });

    watch(user, (newValue, oldValue) => {
      console.log(newValue,oldValue);
    }, { deep: true })

    return { 
      user
    };
  }
};
</script>

<style scoped>
  
</style>
