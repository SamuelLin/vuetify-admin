<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  password: ''
})

const nameRules = [
  (value) => {
    if (value?.length > 3) return true
    return 'Name must be at least 3 characters.'
  }
]

const passwordRules = [
  (value) => {
    if (/[^0-9]/.test(value)) return true
    return 'Last name can not contain digits.'
  }
]
</script>

<template>
  <v-container class="fill-height">
    <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent>
        <v-text-field v-model="form.name" label="Name" :rules="nameRules"></v-text-field>
        <v-text-field
          v-model="form.password"
          label="Password"
          :rules="passwordRules"
        ></v-text-field>
        <v-btn type="submit" block class="mt-2">Submit</v-btn>
      </v-form>
    </v-sheet>
  </v-container>
</template>
