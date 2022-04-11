<template>
    <div>
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader @addTodo="addTodo"></MyHeader>
                <MyList :todos="todos" :checkTodo="checkTodo" :delTodo="delTodo"></MyList>
                <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @delDoneTodo="delDoneTodo"></MyFooter>
            </div>
        </div>
    </div>
</template>

<script>
    //引入组件
    import MyHeader from './components/MyHeader.vue'
    import MyList from './components/MyList.vue'
    import MyFooter from './components/MyFooter.vue'

    export default {
        name:'App',
        components:{
            MyHeader,
            MyList,
            MyFooter
        },
        data(){
            return {
                todos:[ 
                    {id:'001',title:'吃饭',isDone:false,isDel:false},
                    {id:'002',title:'睡觉',isDone:false,isDel:false},
                    {id:'003',title:'打豆豆',isDone:false,isDel:false}
                ]
            }
        },
        methods:{
            addTodo(todoObj){
                this.todos.unshift(todoObj)
            },
            checkTodo(checkId){
                this.todos.forEach((todo) => {
                    if (todo.id === checkId) {
                        todo.isDone = !todo.isDone
                        // console.log(this.todos);
                    }
                });
            },
            delTodo(delId){
                this.todos.forEach((todo) => {
                    if (todo.id === delId) {
                        // console.log(this.todos.indexOf(todo));
                        // console.log(this.todos);
                        if (confirm('确认要删除该条任务吗？')) {
                            this.todos.splice(this.todos.indexOf(todo),1)
                        }
                    }
                });
            },
            checkAllTodo(isCheckedAll){
                this.todos.forEach((todo) => {
                    todo.isDone = isCheckedAll;
                });
            },
            delDoneTodo(){
                this.todos = this.todos.filter((todo)=>{
                    return !todo.isDone
                })
            }
        }
    }
</script> 

<style>
    /*base*/
    body {
    background: #fff;
    }

    .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    }

    .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
    }

    .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
    }

    .btn:focus {
    outline: none;
    }

    .todo-container {
    width: 600px;
    margin: 0 auto;
    }
    .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    }
</style>