<template>

</template>

<script>
  export default {
    name: 'Six',
    mounted() {
      new Promise((resolve, reject) => {
        reject("失败")
      }).then(
        a => console.log('ok'),
        b => console.log('no')
      );
    }
  }
</script>

<style>

</style>