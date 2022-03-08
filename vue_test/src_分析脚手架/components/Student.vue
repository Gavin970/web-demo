<template>
  <div class="demo">
    <!-- 组件的结构 -->
    <h2>姓名: {{name}}</h2>
    <h2>年龄: {{age}}</h2>
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

<style scoped>
    /* 组件的样式 */
    .demo{
        color: skyblue;
    }
</style>