<template>
  <div></div>
</template>

<script>
export default {
  name: "IteratorDemo",
  mounted() {
    let arr = ["a","b","c"];

    let iter = arr[Symbol.iterator]();

    console.log(iter.next());
    console.log(arr);
  }
};
</script>

<style>
</style>