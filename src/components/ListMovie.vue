<template>
    <v-card class="white--text" v-bind:img="getImage" height="260px">
        <v-img  height="200px" />
        <v-divider light></v-divider>
        <v-card-actions>
            <v-list-tile class="grow">
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.Title }}</v-list-tile-title>
                </v-list-tile-content>

                <v-btn icon>
                    <v-icon>share</v-icon>
                </v-btn>
            </v-list-tile>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
  name: 'ListMovie',
  props: {
    item: {
      type: Object,
      default: function () {
        return { }
      }
    }
  },
  computed: {
    getImage () {
      return this.item.Poster !== 'N/A' ? this.item.Poster : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7FtCSu3uWN9E9gvZrtQ-h36tY0gv55Scm5kfEw_4_tKl-ftz'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
