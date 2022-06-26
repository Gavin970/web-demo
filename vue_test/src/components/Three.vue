<template>

</template>

<script>
  export default {
    name: "Three",
    mounted() {
      function interval(callback, delay) {
        let id = setInterval(function () {
          callback(id)
        }, delay)
      }
      interval(function (id) {
        console.log(id);
      }, 1000)
    }
  }
</script>

<style>

</style>