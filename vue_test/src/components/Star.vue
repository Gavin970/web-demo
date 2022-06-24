<template>

</template>

<script>
  export default {
    name: 'Star',
    mounted() {
      function star(sum) {
        if (sum === 0) {
          return ''
        }
        console.log("*".repeat(sum));
        star(--sum);
      }
      star(5);
    }
  }
</script>

<style>

</style>