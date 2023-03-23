<template>
  <v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']">
    <template v-slot:prepend>
      <v-icon size="small" icon="mdi-home"></v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script setup>
//
</script>
