<template>
  <v-container
      id="scroll-target"
      class=""
      grid-list-xs
    >
      <FilterMovie />
      <v-layout
        row
        wrap
        v-scroll:#scroll-target="onScroll"
      >
        <v-flex v-for="item in items" :key="item.imdbID" xs4>
          <ListMovie v-bind:item="item" />
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
// @ is a//n alias to /src
import FilterMovie from '@/components/FilterMovie.vue'
import ListMovie from '@/components/ListMovie.vue'
import { createNamespacedHelpers } from 'vuex'

const { mapState } = createNamespacedHelpers('movies')

export default {
  name: 'home',
  components: {
    FilterMovie,
    ListMovie
  },

  computed: {
    ...mapState({
      items: state => state.movies
    })
  },

  mounted () {
    this.$store.dispatch('movies/getMovies', { s: 'your', y: '2019', type: '', page: 1, scroll: true })
  },

  data () {
    return {
      offsetTop: 0
    }
  },

  methods: {
    onLoad (index, done) {
      setTimeout(() => {
        if (this.items) {
          this.items.push({}, {}, {}, {}, {}, {}, {})
          done()
        }
      }, 2000)
    },
    onScroll (e) {
      console.log(e.target)
      this.offsetTop = e.target.scrollTop
    }
  }
}
</script>
