<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和为：{{ bigSum }}</h3>
    <h3>学生年级：{{ grade }}，学科：{{ subject }}</h3>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前和为奇数则做加法运算</button>
    <button @click="incrementWait">半秒后做加法运算</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      num: 1,
    };
  },
  computed: {
    //1.程序员自己写计算属性
    // sum(){
    //   return this.$store.state.sum
    // },
    //2.借助mapState生成计算属性，从state中读取数据（对象写法）
    // ...mapState({ sum: "sum", grade: "grade", subject: "subject" }),
    //3.借助mapState生成计算属性，从state中读取数据（数组写法）
    ...mapState(["sum", "grade", "subject"]),
    ...mapGetters({ bigSum: "bigSum" }),
  },
  methods: {
    increment() {
      this.$store.commit("INCREMENT", this.num);
    },
    decrement() {
      this.$store.commit("DECREMENT", this.num);
    },
    incrementOdd() {
      this.$store.dispatch("incrementOdd", this.num);
    },
    incrementWait() {
      this.$store.dispatch("incrementWait", this.num);
    },
  },
  mounted() {
    console.log(1);
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>