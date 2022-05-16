<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["英雄联盟", "绝地求生", "CSGO", "人类一败涂地"],
    };
  },
};
</script>

<style>
.category {
  width: 200px;
  height: 300px;
  background-color: skyblue;
}
h3 {
  text-align: center;
  background: orange;
}
</style>