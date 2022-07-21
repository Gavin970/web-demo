<template>
  <Child />
</template>

<script>
import Child from './components/child.vue';
import { reactive } from '@vue/reactivity';
import { provide } from '@vue/runtime-core';
export default {
  name: 'App',
  components: {
    Child,
  },
  setup() {
    let user = reactive({
      name: '张三',
      age: 18,
    });

    provide('user', user);

    return {
      user,
    };
  },
};
</script>

<style scoped></style>
