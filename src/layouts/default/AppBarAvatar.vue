<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <div v-bind="props" style="cursor: pointer">
        <v-avatar size="x-small" class="mr-2">
          <v-icon icon="mdi-account-circle"></v-icon>
        </v-avatar>
        <span class="text-subtitle-2">{{ name }}</span>
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
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/user'

const router = useRouter()
const userStore = useUserStore()
const { name } = storeToRefs(userStore)

const handleLogout = () => {
  userStore.logout()
  router.push('/login')
}
</script>
