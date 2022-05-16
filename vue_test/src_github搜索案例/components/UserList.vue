<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <UserItem
      v-show="userList.length"
      v-for="userObj in userList"
      :key="userObj.id"
      :userItem="userObj"
    ></UserItem>
    <!-- 展示欢迎词 -->
    <h1 v-show="isFirst">搜索GitHub用户</h1>
    <!-- 加载中 -->
    <h1 v-show="isLoading">加载中……</h1>
  </div>
</template>

<script>
import UserItem from "./UserItem.vue";
export default {
  name: "UserList",
  components: { UserItem },
  data() {
    return {
      isFirst:true,
      isLoading:false,
      errMsg:'',
      userList: [],
    };
  },
  mounted() {
    this.$bus.$on("getUserInfo", (userInfo) => {
      console.log(userInfo);
      this.userList = userInfo;
    });
  },
  beforeDestroy() {
    this.$bus.$off("getUserInfo");
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}
.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}
.card-text {
  font-size: 85%;
}
</style>