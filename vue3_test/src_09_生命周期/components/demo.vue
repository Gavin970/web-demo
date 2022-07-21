<template>
  <div class="demo">
    <h1>我是demo组件</h1>
    <button @click="test">打招呼</button>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  props: ['msg'],
  emits: ['hello'],
  setup(props, context) {
    // console.log(props);
    // console.log(context.attrs);
    // console.log(context.slots);
    
    function test(){
      context.emit('hello');
    }
    return {
      test
    };
  }
}
</script>

<style scoped>
  .demo {
    background-color: orange;
    width: 500px;
    height: 100px;
  }
</style>