<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Homepage</h1>
        <v-btn nuxt :to="{name: 'category-slug', params: {slug: 'test'}}">Test Category</v-btn>
        <v-btn nuxt :to="{name: 'category-slug', params: {slug: 'retest'}}">Retest Category</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {}
}
</script>
