<template>
  <div class="fill-height">
    <component :is="type" :id="id"></component>
  </div>
</template>

<script>
export default {
  name: "magento",
  components: {
    Category: () => ({
      component: import('~/components/magento/Category')
    }),
    Product: () => ({
      component: import('~/components/magento/Product')
    }),
    cms_Page: () => ({
      component: import('~/components/magento/CmsPage')
    })
  },
  asyncData(ctx) {
    return {
      type: ctx.urlResolver.type,
      id: ctx.urlResolver.id
    }
  }
}
</script>

<style scoped>

</style>
