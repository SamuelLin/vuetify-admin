<template>
  <v-navigation-drawer color="indigo-darken-4" v-model="drawer" :rail="rail" floating>
    <v-list density="compact" nav>
      <v-list-item
        :prepend-icon="rail === false ? 'mdi-menu-left' : 'mdi-menu-right'"
        @click="rail = !rail"
      ></v-list-item>

      <v-list-item
        v-for="route in routes"
        :key="route.name"
        :prepend-icon="route.meta.icon"
        :title="route.name"
        :to="`/${route.path}`"
        exact
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { permissionRoutes } from '@/router'

const drawer = ref(true)
const rail = ref(true)

const routes = permissionRoutes[0].children
</script>
