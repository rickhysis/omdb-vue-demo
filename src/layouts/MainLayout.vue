<template>
    <v-app id="inspire">
        <v-toolbar
            color="blue darken-3"
            dark
            app
            :clipped-left="$vuetify.breakpoint.mdAndUp"
            fixed
            >
            <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
                <span class="hidden-sm-and-down">OMDB DEMO</span>
            </v-toolbar-title>
            <v-text-field
                flat
                solo-inverted
                prepend-icon="search"
                label="Search"
                class="hidden-sm-and-down"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>apps</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>notifications</v-icon>
            </v-btn>
            <v-btn icon large>
                <v-avatar size="32px" tile>
                    <v-btn icon>
                        <v-icon>user</v-icon>
                    </v-btn>
                </v-avatar>
            </v-btn>
        </v-toolbar>
        <v-content>
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
export default {
  name: 'MainLayout',
  data: () => ({
    dialog: false,
    drawer: null
  }),
  props: {
    source: String
  }
}
</script>

<style lang="scss">
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
