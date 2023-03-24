<template>
  <v-app>
    <v-layout>
      <AppNavigation />
      <AppBar />
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
import AppBar from './AppBar.vue'
import AppNavigation from './AppNavigation.vue'
</script>
