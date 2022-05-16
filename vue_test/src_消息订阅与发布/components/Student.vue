<template>
  <div class="student">
    <!-- 组件的结构 -->
    <h2>姓名: {{name}}</h2>
    <h2>年龄: {{age}}</h2>
    <button @click="sendStudentName">点我将学生姓名传给school组件</button>
  </div>
</template>

<script>
    import pubsub from 'pubsub-js'
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
            sendStudentName(){
                // this.$bus.$emit('getStudentName',this.name)
                pubsub.publish('getStudentName',this.name)
            }
        }
    }
</script>

<style scoped>
    /* 组件的样式 */
    .student{
        background-color: skyblue;
        padding: 10px;
    }
</style>