<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <h1>Dashboard</h1>
      <v-btn @click="sendAlert">send alert</v-btn>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { useMessageStore } from '@/store/message'

const messageStore = useMessageStore()

function sendAlert() {
  messageStore.sendMessage({
    text: 'This is a error'
  })
}
</script>
