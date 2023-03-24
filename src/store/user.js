import { defineStore } from 'pinia'
import { getToken, setToken, removeToken } from '@/utils/auth'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: getToken(),
    name: '',
    roles: []
  }),
  actions: {
    async login() {
      // TODO: login api
      return new Promise((resolve) => {
        setTimeout(() => {
          this.name = 'Stephen Curry'
          this.roles = ['admin']
          setToken('123jkjk1232300asdfasdf123123')
          resolve()
        }, 3000)
      })
    },
    logout() {
      this.name = ''
      this.roles = []
      this.token = ''
      removeToken()
      // TODO: reset router
    },
    getInfo() {
      return new Promise((resolve) => {
        // TODO: get user info
        this.name = 'Stephen Curry'
        this.roles = ['admin']
        resolve()
      })
    },
    resetToken() {
      return new Promise((resolve) => {
        this.token = ''
        removeToken()
        resolve()
      })
    }
  }
})
