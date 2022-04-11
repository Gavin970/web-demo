<template>
  <div class="student">
    <!-- 组件的结构 -->
    <h2>姓名: {{name}}</h2>
    <h2>年龄: {{age}}</h2>
    <button @click="sendStudentName(name)">点我传递学生姓名给App</button>
    <button @click="m1()">点我解绑事件</button>
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
            sendStudentName(){
                this.$emit('getStudentName',this.name)
                // this.$emit('demo')
            },
            m1(){
                this.$off('getStudentName') //解绑一个事件
                // this.$off(['getStudentName','demo']) //解绑多个事件
                // this.$off() //解绑所有事件
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