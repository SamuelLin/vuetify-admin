<template>
  <v-snackbar
    v-model="snackbar"
    location="top right"
    variant="text"
    :timeout="timeout"
    @update:modelValue="handleChange"
  >
    <v-alert :type="messageType" elevation="2" closable @click:close="snackbar = false">
      {{ message }}
    </v-alert>

    <!-- Sanckbar 原本按鈕 -->
    <!-- <template v-slot:actions>
      <v-btn color="pink" variant="text" @click="snackbar = false"> Close </v-btn>
    </template> -->
  </v-snackbar>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useMessageStore } from '@/store/message'

const messageStore = useMessageStore()
const messageId = computed(() => messageStore.id)
const messageType = computed(() => messageStore.type)
const message = computed(() => messageStore.message)

const snackbar = ref(false)
const timeout = ref(4000)

watch(messageId, () => {
  timeout.value = timeout.value === 4000 ? 4001 : 4000
  snackbar.value = true
})

function handleChange() {}
</script>
