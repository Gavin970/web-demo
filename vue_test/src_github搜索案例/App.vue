<template>
  <div class="container">
    <Search></Search>
    <UserList></UserList>
  </div>
</template>

<script>
import Search from "./components/Search";
import UserList from "./components/UserList";
export default {
  components: { Search, UserList },
  name: "App",
};
</script> 

<style>
</style>