<template>
  <v-app-bar flat density="compact">
    <AppBarBreadcrumbs />
    <template v-slot:append>
      <AppBarAvatar />
    </template>
  </v-app-bar>
</template>

<script setup>
import AppBarBreadcrumbs from './AppBarBreadcrumbs.vue'
import AppBarAvatar from './AppBarAvatar.vue'
</script>
