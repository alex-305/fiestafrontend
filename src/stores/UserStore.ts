import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('userStore', () => {
  const username = ref('')

  const changeUsername = (name: string) => {
    username.value = name
  }

  const getUsername = (): string => {
    return username.value
  }

  return { getUsername, changeUsername }
})
