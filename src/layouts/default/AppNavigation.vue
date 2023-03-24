<template>
  <v-navigation-drawer color="indigo-darken-4" v-model="drawer" :rail="rail" floating>
    <v-list density="compact" nav>
      <v-list-item
        :prepend-icon="rail === false ? 'mdi-menu-left' : 'mdi-menu-right'"
        @click="rail = !rail"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        value="dashboard"
        title="Dashboard"
        to="/"
        exact
      >
      </v-list-item>
      <v-list-item
        prepend-icon="mdi-basket"
        value="messages"
        title="Product"
        to="/product"
        exact
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const drawer = ref(true)
const rail = ref(true)

const route = useRoute()
console.log('route', route)
</script>
