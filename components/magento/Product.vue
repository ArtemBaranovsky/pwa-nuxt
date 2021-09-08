<template>
  <h1>Product</h1>
</template>

<script>
import AppProductDetail from '~/components/products/ProductDetail';

export default {
  name: "Product",
  components: { AppProductDetail },
  props: {
    id: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss">
.loader {
  position: fixed;
  left: 50vw;
  right: 50vw;
  top: 50vw;
  bottom: 50vw;
}
</style>
