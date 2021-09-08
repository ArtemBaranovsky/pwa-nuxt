<template>
  <div>
    <v-list dense>
      <v-list-item nuxt v-for="(item, index) in categoryTree" :key="index" :to="{path: `/${item.url_path}${storeConfig.category_url_suffix}`}" exact
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "AppNavigation",
  computed: {
    ...mapGetters({
      storeConfig: 'storeConfig',
      categoryTree: 'category/tree'
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
