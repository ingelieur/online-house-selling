<template>
  <div id="app">
    <navbar></navbar>
    <intro></intro>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import intro from '@/components/intro'

export default {
  name: 'app',
  components: {
    navbar,
    intro
  },
  created: function () {
    this.$store.dispatch('getHouses')
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;*/
  margin-top: 30px;
}
</style>
