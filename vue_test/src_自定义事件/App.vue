<template>
    <div class="app">
        <h2>{{msg}}{{studentName}}</h2>
        <School :getSchoolName="getSchoolName"></School>
        <Student v-on:getStudentName="getStudentName" @demo="m1" @click.native.once="show"></Student>
        <!-- <Student ref="student"></Student> -->
    </div>
</template>

<script>
    //引入组件
    import School from './components/School.vue'
    import Student from './components/Student.vue'

    export default {
        name:'App',
        components:{
            School,
            Student
        },
        data(){
            return{
                msg:'你好啊！',
                studentName:''
            }
        },
        methods:{
            getSchoolName(schoolName){
                console.log('App收到了学校名称:'+ schoolName);
            },
            getStudentName(studentName){
                console.log('App收到了学生的姓名:'+ studentName);
                this.studentName = studentName
            },
            m1(){
                console.log('demo事件被触发了');
            },
            show(){
                alert('这是一个原生事件')
            }
        },
        mounted(){
            // this.$refs.student.$on('getStudentName',this.getStudentName); //绑定自定义事件
            // this.$refs.student.$once('getStudentName',this.getStudentName); //绑定自定义事件（一次性）
        }
    }
</script>

<style scoped>
    .app {
        background-color:khaki ;
        padding: 10px;
    }
</style>