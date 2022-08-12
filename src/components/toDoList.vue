<template>
    
    <ul class="toDoList">
        <li class="toDoList__item" v-bind:key="index" v-for="(task, index) in getToDoList">
            {{ task }}
        </li>
    </ul>

</template>

<script>

import store from '../store/index'

export default {
    name: 'toDoList',
    computed : {
        getToDoList(){
            return store.state.toDoList
        }
    }
}

</script>