<template>
  <div>
    <h3>上方组件的和为：{{sum}}</h3>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="stu in studentList" :key="stu.id">
        {{ stu.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    studentList() {
      return this.$store.state.studentList;
    },
    sum() {
      return this.$store.state.sum;
    },
  },
  methods: {
    add() {
      const stuObj = { id: nanoid(), name: this.name };
      this.$store.commit("ADDSTU", stuObj);
      // console.log(stuObj);
      this.name = "";
    },
  },
};
</script>

<style>
</style>