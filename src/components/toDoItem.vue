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
            store.commit('REMOVE_TO_DO', this.id)
        }
    }
}

</script>