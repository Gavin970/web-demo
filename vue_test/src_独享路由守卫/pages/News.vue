<template>
  <ul>
    <li :style="{opacity}">欢迎来到德莱联盟</li>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>
export default {
  name:'News',
  data() {
    return {
      opacity:1
    }
  },
  // mounted() {
  //   this.timer = setInterval(()=>{
  //     this.opacity -= 0.01
  //     if (this.opacity <= 0) {
  //       this.opacity = 1
  //     }
  //   },16)
  //   console.log(this);
  // },
  // beforeDestroy() {
  //   clearInterval(this.timer)
  // },
  activated() {
    this.timer = setInterval(()=>{
      this.opacity -= 0.01
      if (this.opacity <= 0) {
        this.opacity = 1
      }
    },16)
    console.log(this);
  },
  deactivated() {
    console.log('die');
    clearInterval(this.timer)
  },
}
</script>

<style>

</style>