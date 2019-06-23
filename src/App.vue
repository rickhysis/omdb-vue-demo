<template>
  <div id="app">
    <div :is="component" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import MainLayout from '@/layouts/MainLayout'

const { mapState } = createNamespacedHelpers('common')

export default {
  components: {
    MainLayout
  },
  computed: {
    ...mapState({
      component: state => state.layout
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
