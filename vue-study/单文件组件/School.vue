<template>
  <div>
    <!-- 组件的结构 -->
    <h2 class="demo">学校名称: {{name}}</h2>
    <h2 class="demo">学校地址: {{address}}</h2>
    <button @click="showVc">点我获取组件实例对象</button>
  </div>
</template>

<script>
    // 组件交互相关的代码
    export default {
        name:'School',
        data(){
            return {
                name: '上政',
                address: '上海'
            }
        },
        methods:{
            showVc(){
                console.log(this); 
            }
        }
    }
</script>

<style>
    /* 组件的样式 */
    .demo{
        color: orange;
    }
</style>