<template>
  <div>
    <button @click="lottery">抽奖</button>
  </div>
</template>

<script>
export default {
  name: "Promise",
  methods: {
    rand(m,n){
      return Math.ceil(Math.random() * (n - m + 1)) + m - 1;
    },
    lottery(){
      //定时器
      // setTimeout(()=>{
      //   if (this.rand(1,101) <= 30) {
      //     alert('你汤姆的中奖啦！')
      //   } else {
      //     alert('再接再厉')
      //   }
      // },2000)

      //Promise实现
      const p = new Promise((resolve, reject) => {
        setTimeout(()=>{
          let n = this.rand(1,101);

          if (n <= 30) {
            resolve(n);
            // debugger
          } else {
            reject(n);
          }
        },2000);
      });

      p.then(
        (value) => {
          // debugger
          alert("你汤姆的中奖啦！中奖数字为" + value);
        },
        (err) => {
          alert("再接再厉，号码为" + err);
        }
      );
      let fn = function() {
        console.log(arguments);
      };

      fn(1,2,3);
    }
  }
};
</script>

<style>
</style> 