<template>
  <div class="card">
    <a :href="userItem.html_url" target="_blank">
      <img :src="userItem.avatar_url" style="width: 100px" />
    </a>
    <p class="card-text">{{ userItem.login }}</p>
  </div>
</template>

<script>
export default {
  name: "UserItem",
  props: ["userItem"],
};
</script>

<style>
</style>