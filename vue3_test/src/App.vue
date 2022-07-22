<template>
  <div>
    <h1>我是app组件</h1>
    <Suspense>
      <template v-slot:default>
        <Demo />
      </template>
      <template v-slot:fallback>
        <h3>Loading...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core';
const Demo = defineAsyncComponent(() => import('./components/demo'));
export default {
  name: 'App',
  components: { Demo },
  setup() {},
};
</script>

<style scoped>
div {
  width: 600px;
  height: 200px;
  background-color: skyblue;
}
</style>
