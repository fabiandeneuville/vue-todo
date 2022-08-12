<template>
    
    <form class="addToDoForm">
        <h2 class="addToDoForm__heading">Add a new task</h2>
        <button v-on:click="addToDo" class="addToDoForm__button">+</button>
        <input v-model="toDo" class="addToDoForm__input" type="text">
        <p class="addToDoForm__error">{{ errorMessage }}</p>
    </form>

</template>

<script>

import store from '../store/index'

export default {
    name: 'addToDoForm',
    data(){
        return {
            toDo: '',
            errorMessage: ''
        }
    },
    methods: {
        addToDo(e){
            if(this.toDo === ''){
                e.preventDefault()
                this.errorMessage = "Veuillez renseigner une tâche."
            } else {
                e.preventDefault()
                this.errorMessage = '';
                store.commit('ADD_TO_DO', this.toDo);
                this.toDo = ''
            }
        }
    }
}

</script>
