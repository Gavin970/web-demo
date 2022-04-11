<template>
  <div class="school">
    <!-- 组件的结构 -->
    <h2>学校名称: {{name}}</h2>
    <h2>学校地址: {{address}}</h2>
    <button @click="getSchoolName(name)">点我传递学校名给App</button>
  </div>
</template>

<script>
    // 组件交互相关的代码
    export default {
        name:'School',
        props:['getSchoolName'],
        data(){
            return {
                name: '上政',
                address: '上海'
            }
        }
    }
</script>

<style scoped>
    /* 组件的样式 */
    .school{
        background-color: orange;
        padding: 10px;
        margin-bottom: 30px;
    }
</style>