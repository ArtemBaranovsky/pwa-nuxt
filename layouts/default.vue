<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      dark
    >
      <v-list dense>
        <v-list-item nuxt :to="{name: 'test'}" exact
        >
          <v-list-item-content>
            <v-list-item-title>Home page</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt :to="{name: 'category-slug', params: {slug: 'test'}}"
        >
          <v-list-item-content>
            <v-list-item-title>Test Category</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt :to="{name: 'category-slug', params: {slug: 'retest'}}"
        >
          <v-list-item-content>
            <v-list-item-title>Retest Category</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      dark
    >
      <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <nuxt-link class="white--text" style="text-decoration: none;" nuxt :to="{name: 'index'}" exact>Astrio Agency
        </nuxt-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <nuxt/>
    </v-content>
    <v-footer
      app
      dark
    >
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  }),
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    }
  },
  created() {
    this.$vuetify.theme.dark = false
  }
}
</script>
