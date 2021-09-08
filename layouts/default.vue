<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      dark
    >

      <app-navigation/>
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

    <app-footer/>
  </v-app>
</template>

<script>
import AppNavigation from '~/components/common/Navigation';
import AppFooter from '~/components/common/Footer';

export default {
  components: {
    AppNavigation, AppFooter
  },
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
