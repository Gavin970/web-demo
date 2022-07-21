<template>
  <h1>数字：{{num}}</h1>
  <button @click="num++">点我+1</button>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, watch, watchEffect } from '@vue/runtime-core';
export default {
  name: 'App',
  setup() {
    let num = ref(0);

    // 通过组合式api的形式使用生命周期钩子
    onBeforeMount(() => {
      console.log('---onBeforeMount---')
    })
    onMounted(() => {
      console.log('---onMounted---')
    })
    onBeforeUpdate(() => {
      console.log('---onBeforeUpdate---')
    })
    onUpdated(() => {
      console.log('---onUpdated---')
    })
    onBeforeUnmount(() => {
      console.log('---onBeforeUnmount---')
    })
    onUnmounted(() => {
      console.log('---onUnmounted---')
    })

    return { 
      user
    };
  }
};
</script>

<style scoped>
  
</style>
