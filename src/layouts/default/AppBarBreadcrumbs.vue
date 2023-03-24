<template>
  <v-breadcrumbs :items="breadcrumbs" exact> </v-breadcrumbs>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const breadcrumbs = computed(() =>
  route.name === 'Home' ? [route.name] : [{ title: 'Home', href: '/' }, route.name]
)
</script>
