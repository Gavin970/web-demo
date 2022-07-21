<template>
  <h2>{{ user.name }}-{{ user.age }}</h2>
</template>

<script>
import { inject } from '@vue/runtime-core';
export default {
  name: 'App',
  setup() {
    const user = inject('user');

    return {
      user,
    };
  },
};
</script>

<style scoped>
h2 {
  background-color: orange;
}
</style>
