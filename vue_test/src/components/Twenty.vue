<template>
  <div class="box" :style="boxStyle"></div>
</template>

<script>
  export default {
    name: 'Twenty',
    data() {
      return {
        boxStyle: {
          left: 0,
          width: "100px"
        }
      }
    },
    mounted() {
      function interval(callback, delay = 1000) {
        return new Promise(resolve => {
          let id = setInterval(() => {
            callback(id, resolve)
          }, delay)
        })
      }
      interval((id, resolve) => {
        this.boxStyle.left = parseInt(this.boxStyle.left);
        this.boxStyle.left = this.boxStyle.left + 10 + 'px';
        // console.log(this.boxStyle);
        if (parseInt(this.boxStyle.left) >= 200) {
          clearInterval(id);
          resolve();
        }
      }, 100).then((value) => {
        interval((id, resolve) => {
          this.boxStyle.width = parseInt(this.boxStyle.width);
          this.boxStyle.width = this.boxStyle.width - 10 + 'px';
          if (parseInt(this.boxStyle.width) <= 10) {
            clearInterval(id);
            resolve();
          }
        }, 100)
      })
    },
  }
</script>

<style>
  .box {
    position: absolute;
    left: '';
    width: 100px;
    height: 100px;
    background-color: greenyellow;
  }
</style>