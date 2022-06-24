<template>
  <div>
    <button @click="rest">按钮</button>
  </div>
</template>

<script>
  export default {
    name: 'Rest',
    methods: {
      rest() {
        function fn(a, b, ...args) {
          console.log(a);
          console.log(b);
          console.log(args);
        }
        fn(1, 2, 3, 4, 5, 6)
      }
    }
  }
</script>

<style>
</style>