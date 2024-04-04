import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {
  let username

  const changeUsername = (name:string) => { username = name }

  return { username, changeUsername }
})
