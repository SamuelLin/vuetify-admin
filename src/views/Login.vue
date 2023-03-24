<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useField, useForm } from 'vee-validate'
import { useUserStore } from '@/store/user'

const router = useRouter()
const userStore = useUserStore()

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value) return true
      return 'Name needs to be at least 2 characters.'
    },
    password(value) {
      if (value) return true
      return 'You must enter a password'
    }
  }
})

const name = useField('name')
const password = useField('password')

const showPassword = ref(false)
const isSending = ref(false)

const submit = handleSubmit(async (form) => {
  isSending.value = true

  try {
    await userStore.login(form)
    router.push('/')
  } catch (error) {
    console.log('error', error)
  } finally {
    isSending.value = false
  }
})
</script>

<template>
  <v-app>
    <v-container class="fill-height">
      <v-sheet width="300" class="mx-auto">
        <h2 class="text-center mb-2">Vuetify Admin</h2>

        <v-form @submit.prevent="submit" :disabled="isSending">
          <v-text-field
            v-model="name.value.value"
            label="Name"
            :error-messages="name.errorMessage.value"
          ></v-text-field>
          <v-text-field
            v-model="password.value.value"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            :error-messages="password.errorMessage.value"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
          <v-btn
            class="mt-2"
            type="submit"
            block
            variant="tonal"
            color="primary"
            :loading="isSending"
            >Login</v-btn
          >
          <v-btn class="mt-2" block variant="tonal" :disabled="isSending" @click="handleReset"
            >Reset</v-btn
          >
        </v-form>
      </v-sheet>
    </v-container>
  </v-app>
</template>
