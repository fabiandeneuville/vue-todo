<template>
    
    <ul class="toDoList">
        <li class="toDoList__item" v-bind:key="index" v-for="(task, index) in getToDoList">
            <toDoItem
            v-bind:id="index"
            v-bind:task="task"
            >
            </toDoItem>
        </li>
    </ul>

</template>

<script>

import store from '../store/index'

import toDoItem from '../components/toDoItem.vue'

export default {
    name: 'toDoList',
    components: {
        toDoItem
    },
    computed : {
        getToDoList(){
            return store.state.toDoList
        }
    }
}

</script>