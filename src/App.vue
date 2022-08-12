<template>
  <div id="app">
    <pageHeader></pageHeader>
  </div>
</template>

<script>

import pageHeader from './components/pageHeader.vue'

export default {
  name: 'App',
  components: {
    pageHeader
  }
}
</script>

<style lang="scss">

  @import'./assets/style/main.scss';

</style>
