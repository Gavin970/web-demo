<template>

</template>

<script>
  export default {
    name: 'TwentyEight',
    mounted() {
      let promise = new Promise((resolve) => {
        resolve(1);
      }).then((value) => {
        console.log(value);
      })
      console.log(promise);
    }
  }
</script>

<style>

</style>