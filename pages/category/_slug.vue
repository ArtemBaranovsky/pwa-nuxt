
<template>
  <v-container>
    <v-row>
      <v-col>
        <code>Path: http://localhost:3000/category/{{$route.params.slug}}</code>
        <h1>Category page with slug {{$route.params.slug}}</h1>
        <v-btn nuxt :to="{name: 'product-id', params: {id: 1}}">Product 1</v-btn>
        <v-btn nuxt :to="{name: 'product-id', params: {id: 2}}">Product 2</v-btn>
        <v-btn nuxt :to="{name: 'product-id', params: {id: 3}}">Product 3</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
