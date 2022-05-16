<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition>
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
export default {
    name: 'Test',
    data() {
        return {
            isShow:true
        }
    }
}
</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }
    div {
        margin-top: 50px;
        margin-left: 10px;
    }
    h1 {
        margin-top: 10px;
        background-color: orange;
        width: 500px;
    }
    .v-enter-active {
        animation: show 1s;
    }
    .v-leave-active {
        animation: show 1s reverse;
    }
    @keyframes show {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0);
        }
    }
</style>