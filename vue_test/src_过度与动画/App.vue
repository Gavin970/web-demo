<template>
    <div>
        <Test></Test>
        <Test2></Test2>
    </div>
</template>

<script>
    import Test from './components/test.vue'
    import Test2 from './components/test2.vue'
    export default {
        name:'App',
        components:{
            Test,
            Test2
        },
        data(){
            return {
                
            }
        }
    }
</script> 

<style>
    /*base*/
    body {
    background: #fff;
    }
</style>