<template>
  <input type="text" v-model="keyword" />
  <h2>{{ keyword }}</h2>
</template>

<script>
import { customRef, ref } from '@vue/reactivity';
export default {
  name: 'App',
  setup() {
    //使用程序员自定义的ref
    function myRef(value) {
      return customRef((track, trigger) => {
        let timer = null;
        return {
          get() {
            track(); // 通知vue追踪value的变化
            return value;
          },
          set(newValue) {
            console.log(newValue);
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              trigger(); // 通知vue重新解析模版
            }, 500);
          },
        };
      });
    }

    let keyword = myRef('hello');

    return {
      keyword,
    };
  },
};
</script>

<style scoped></style>
