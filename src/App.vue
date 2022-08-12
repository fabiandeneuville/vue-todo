<template>
  <div id="app">
    <pageHeader></pageHeader>
    <addToDoForm></addToDoForm>


  </div>
</template>

<script>

import pageHeader from './components/pageHeader.vue'
import addToDoForm from './components/addToDoForm.vue'

export default {
  name: 'App',
  components: {
    pageHeader,
    addToDoForm
  }
}
</script>

<style lang="scss">

  @import'./assets/style/main.scss';

</style>
