<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <div v-bind="props" style="cursor: pointer">
        <v-avatar size="x-small" class="mr-2">
          <v-icon icon="mdi-account-circle"></v-icon>
        </v-avatar>
        <span class="text-subtitle-2">Stephen Curry</span>
        <v-icon icon="mdi-menu-down"></v-icon>
      </div>
    </template>

    <v-list>
      <v-list-item @click="handleLogout">
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
const handleLogout = () => {
  console.log('logout')
}
</script>
