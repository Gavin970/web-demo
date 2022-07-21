<template>
  <h1>数字：{{ num }}</h1>
  <button @click="num++">点我+1</button>
  <hr />
  <h1>鼠标点击的位置</h1>
  <h2 v-if="point.x">x坐标:{{ point.x }}</h2>
  <h2 v-if="point.y">y坐标:{{ point.y }}</h2>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import usePoint from './hooks/usePoint';
export default {
  name: 'App',
  setup() {
    let num = ref(0);
    let point = usePoint();

    return {
      num,
      point,
    };
  },
};
</script>

<style scoped></style>
