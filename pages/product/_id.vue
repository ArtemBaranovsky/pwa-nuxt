<template>
  <v-container>
    <code>Path: http://localhost:3000/product/{{$route.params.id}}</code>
    <v-row>
      <v-col cols="12" md="6">
        <v-img src="https://via.placeholder.com/1000"
               aspect-ratio="1">
          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="black"></v-progress-circular>
          </v-layout>
        </v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h1>Product {{$route.params.id}}</h1>
        <v-flex>
          <v-btn @click="$router.back()">Back</v-btn>
        </v-flex>
      </v-col>
    </v-row>
  </v-container>
</template>
