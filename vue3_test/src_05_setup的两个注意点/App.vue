<template>
  <div>
    <h1>我是app组件</h1>
    <Demo @hello="sayHello" msg="你好" user="伞兵">
      <template v-slot:qwe>
        <span>wuhu~</span>
      </template>
      <template v-slot:asd>
        <span>wuhu~</span>
      </template>
    </Demo>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import Demo from './components/demo'
import { onMounted } from '@vue/runtime-core';
export default {
  name: 'App',
  components:{ Demo },
  setup() {
    function sayHello(){
      alert('hello');
    }
    return {
      sayHello
    };
  },
};
</script>

<style scoped>
  div {
    width: 600px;
    height: 200px;
    background-color: skyblue;
  }
</style>
