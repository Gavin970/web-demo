<template>
  <div></div>
</template>

<script>
export default {
  name: 'SymbolDemo',
  mounted () {
    let game = {
      up(){
        console.log('up');
      },
      down(){
        console.log('down');
      },
      name: '游戏'
    }
    let methods = {
      up: Symbol(),
      down: Symbol(),
    }
    game[methods.up] = () => {
      console.log('上');
    }
    game[methods.down] = () => {
      console.log('下');
    }
    console.log(game);
    game[methods.up]()
    let s1 = Symbol('深爱的');
    let s2 = Symbol('深爱的');
    console.log(s1===s2);
  }
}
</script>

<style>

</style>