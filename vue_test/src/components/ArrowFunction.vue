<template>
  <div>
    <div
      class="box"
      :style="bgColor"
      @click="change"
    ></div>
  </div>
</template>

<script>
export default {
  name:"ArrowFunction",
  data() {
    return {
      bgColor: {
        "backgroundColor":"skyblue"
      }
    };
  },
  methods: {
    change(){
      setTimeout(() => {
        this.bgColor = {
          "backgroundColor":"pink"
        };
      },2000);
    }
  }
};
</script>

<style>
.box {
  margin: 100px;
  width: 200px;
  height: 200px;
}
</style>