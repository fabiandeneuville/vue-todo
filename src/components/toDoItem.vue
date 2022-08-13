<template>
    
    <div class="toDoItem">
        <p class="toDoItem__content">{{ task }}</p>
        <button v-on:click="deleteToDo" class="toDoItem__delete-btn">-</button>
    </div>

</template>

<script>

import store from '../store/index'

export default {
    name: 'toDoItem',
    props: ['id', 'task'],
    methods: {
        deleteToDo(){
            console.log(this.task)
            store.commit('ADD_COMPLETED', this.task)
            store.commit('REMOVE_TO_DO', this.id)
            console.log(store.state.completedList)
            console.log(store.state.toDoList)
        }
    }
}

</script>