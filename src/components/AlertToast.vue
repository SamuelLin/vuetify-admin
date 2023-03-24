<template>
  <v-snackbar
    v-model="snackbar"
    location="top right"
    timeout="2000"
    @update:modelValue="handleChange"
  >
    {{ message }}
    <template v-slot:actions>
      <v-btn color="pink" variant="text" @click="snackbar = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useMessageStore } from '@/store/message'

const messageStore = useMessageStore()
const messageId = computed(() => messageStore.id)
const message = computed(() => messageStore.message)

const snackbar = ref(false)

watch(messageId, () => {
  snackbar.value = true
})

function handleChange() {
  console.log('disappear')
}
</script>
