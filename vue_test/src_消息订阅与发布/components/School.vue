<template>
  <div class="school">
    <!-- 组件的结构 -->
    <h2>学校名称: {{name}}</h2>
    <h2>学校地址: {{address}}</h2>
  </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    // 组件交互相关的代码
    export default {
        name:'School',
        data(){
            return {
                name: '上政',
                address: '上海'
            }
        },
        methods: {
            demo(msgName,data){
                console.log('收到了订阅的消息',msgName,data);
            }
        },
        mounted() {
            // this.$bus.$on('getStudentName',(studentName)=>{
            //     console.log(studentName);
            // })
            this.pubId = pubsub.subscribe('getStudentName',this.demo)
        },
        beforeDestroy() {
            // this.$bus.$off('getStudentName')
            pubsub.unsubscribe(pubId)
        },
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