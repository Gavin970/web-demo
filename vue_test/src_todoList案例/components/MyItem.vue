<template>
    <div>
        <li>
            <label>
                <input type="checkbox" :checked="todo.isDone" @change="handleCheck(todo.id)"/>
                <span>{{todoTitle}}</span>
            </label>
            <button class="btn btn-danger" @click="handleDel(todo.id)">删除</button>
        </li>
    </div>
</template>

<script>
    export default {
        name:'MyItem',
        props:['todo','checkTodo','delTodo'],
        data(){
            return {
                todoTitle:this.todo.title
            }
        },
        methods:{
            handleCheck(checkId){
                this.checkTodo(checkId)
            },
            handleDel(delId){
                this.delTodo(delId)
                // console.log(delId);
            }
        }
    }
</script>

<style scoped>
    /*item*/
    li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
    }

    li label {
    float: left;
    cursor: pointer;
    }

    li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
    }

    li button {
    float: right;
    display: none;
    margin-top: 3px;
    }

    li:before {
    content: initial;
    }

    li:last-child {
    border-bottom: none;
    }

    li:hover {
        background-color: #ccc;
    }
    li:hover button {
        display: block;
    }
</style>