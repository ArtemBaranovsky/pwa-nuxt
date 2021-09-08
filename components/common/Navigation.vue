<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: "AppNavigation"
}
</script>

<style lang="scss" scoped>

</style>
