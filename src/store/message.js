import { defineStore } from 'pinia'

function generateId() {
  const id =
    Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substring(2, 10) + Date.now()

  return `_${id}`
}

export const useMessageStore = defineStore('app', {
  state: () => ({
    id: '',
    type: '',
    message: ''
  }),
  actions: {
    sendMessage(payload) {
      this.id = generateId()
      this.type = payload.type
      this.message = payload.text
    }
  }
})
