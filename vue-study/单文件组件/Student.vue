<template>
  <div>
    <!-- 组件的结构 -->
    <h2 class="demo">姓名: {{name}}</h2>
    <h2 class="demo">年龄: {{age}}</h2>
  </div>
</template>

<script>
    // 组件交互相关的代码
    export default {
        name:'Student',
        data(){
            return {
                name: '玛卡巴卡',
                age: 16
            }
        },
        methods:{
            
        }
    }
</script>

<style>
    /* 组件的样式 */
    .demo{
        color: skyblue;
    }
</style>