<template>
  <h1>姓名：{{user.name}}</h1>
  <h1>年龄：{{user.age}}</h1>
  <button @click="user.name += '~'">修改姓名</button>
  <button @click="user.age++">修改年龄</button>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';
export default {
  name: 'App',
  setup() {
    const user = reactive({
      name: 'zhangsan',
      age: 18
    });
    //情况一：监视ref定义的响应式数据
    watch(sum, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    }, { immediate: true })

    //情况二：监视ref定义的多个响应式数据
    watch([sum1, sum2], (newValue, oldValue) => {
      console.log(newValue, oldValue);
    }, { immediate: true })

    /* 情况三：监视reactive定义的响应式数据
       注意：1. 无法正确获得oldValue
            2. 强制开启深度监视（无法关闭）
    */
    watch(user, (newValue, oldValue) => {
      console.log(newValue,oldValue);
    }, { deep: false }) //deep:false 无效

    //情况四：监视reactive定义的响应式数据中的某个属性
    watch(() => user.name, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    })

    //情况五：监视reactive定义的响应式数据中的某些属性
    watch([() => user.name, () => user.age], (newValue, oldValue) => {
      console.log(newValue, oldValue);
    })

    /* 特殊情况：监视reactive定义的响应式数据中的某个对象属性
       注意：需要开启深度监视才能监视到对象深层的内容
    */
    watch(() => user.job, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    }, { deep: true })

    return { 
      user
    };
  }
};
</script>

<style scoped>
  
</style>
