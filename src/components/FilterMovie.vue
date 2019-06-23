<template>
  <v-flex xs12 sm6 d-flex>
    <v-select
      :items="type"
      label="Type"
    />
    <v-select
      :items="years"
      label="Year"
    />
  </v-flex>
</template>

<script>
import { range } from '@/utils/range'

export default {
  name: 'FilterMovie',
  props: {
    msg: String
  },
  data: () => ({
    type: ['movie', 'series', 'episode'],
    years: Array.from(range(1950, 2020, 1))
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
