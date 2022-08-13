<template>
  <div id="app">
    <pageHeader></pageHeader>
    <addToDoForm></addToDoForm>
    <h2 class="list__heading">To do ({{ getNumberOfToDo }})</h2>
    <toDoList></toDoList>
    <h2 class="list__heading">Completed ({{ getNumberOfCompleted }})</h2>
    <completedList></completedList>


  </div>
</template>

<script>

import store from './store'

import pageHeader from './components/pageHeader.vue'
import addToDoForm from './components/addToDoForm.vue'
import toDoList from './components/toDoList.vue'
import completedList from './components/completedList.vue'

export default {
  name: 'App',
  computed: {
    getNumberOfToDo(){
      return store.state.toDoList.length
    },
    getNumberOfCompleted(){
      return store.state.completedList.length
    }
  },
  components: {
    pageHeader,
    addToDoForm,
    toDoList,
    completedList
  }
}
</script>

<style lang="scss">

  @import'./assets/style/main.scss';

</style>
