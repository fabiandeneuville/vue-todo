<template>
  <div id="app">
    <pageHeader></pageHeader>
    <addToDoForm></addToDoForm>
    <toDoList></toDoList>


  </div>
</template>

<script>

import pageHeader from './components/pageHeader.vue'
import addToDoForm from './components/addToDoForm.vue'
import toDoList from './components/toDoList.vue'

export default {
  name: 'App',
  components: {
    pageHeader,
    addToDoForm,
    toDoList
  }
}
</script>

<style lang="scss">

  @import'./assets/style/main.scss';

</style>
