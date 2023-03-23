import { defineStore } from 'pinia'
import { getToken, setToken, removeToken } from '@/utils/auth'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: getToken(),
    name: '',
    roles: []
  }),
  actions: {
    // user login
    async login() {
      // TODO: login api
    },

    // user logout,
    logout() {
      this.token = ''
      removeToken()
      // TODO: reset router
    },

    getInfo() {
      return new Promise((resolve) => {
        // TODO: get user info
        resolve()
      })
    },

    // remove token
    resetToken() {
      return new Promise((resolve) => {
        this.token = ''
        removeToken()
        resolve()
      })
    }
  }
})
