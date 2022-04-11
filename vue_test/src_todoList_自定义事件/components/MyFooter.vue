<template>
    <div class="todo-footer" v-if="total">
        <label>
            <input type="checkbox" :checked="isCheckedAll" @change="checkAll"/>
        </label>
        <span>
            <span>已完成{{doneTotal}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="delDoneTodo">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todos'],
    computed:{
        total(){
            return this.todos.length;
        },
        doneTotal(){
            let num = 0;
            this.todos.forEach((todo) => {
                if(todo.isDone === true){
                    num++;
                }
            });
            return num;
        },
        isCheckedAll(){
            if (this.total === this.doneTotal && this.total > 0) {
                // console.log('true');
                return true;
            } else if (this.total !== this.doneTotal) {
                // console.log('false');
                return false;
            }
        }
    },
    methods:{
        checkAll(e){
            // this.checkAllTodo(e.target.checked);
            this.$emit('checkAllTodo',e.target.checked)
        },
        delDoneTodo(){
            this.$emit('delDoneTodo')
        }
    }
}
</script>

<style>
    /*footer*/
    .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
    }

    .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    }

    .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
    }

    .todo-footer button {
    float: right;
    margin-top: 5px;
    }
</style>