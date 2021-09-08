<template>
  <h1>Category</h1>
</template>

<script>
export default {
  name: "Category",
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
