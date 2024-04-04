import { SERVER_BASE_URL } from '@/Helpers/server'
import type { User } from '@/middleware/getuser'
import { useUserStore } from '@/stores/UserStore'
import axios from 'axios'

export const activeToken = (): boolean => {
  const token = localStorage.getItem('jwt_token') ?? ''
  if (token === '') return false
  const expiration = JSON.parse(atob(token.split('.')[1])).exp
  const expirationMS = expiration * 1000
  return Date.now() > expirationMS
}

export const setToken = (token: string) => {
  if (activeToken()) return
  localStorage.setItem('jwt_token', token)
}

export const AuthenticateToken = async (): Promise<User> => {
  const token = localStorage.getItem('jwt_token') ?? ''

  const response = await axios
    .get(SERVER_BASE_URL + '/auth/verify', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log(response.data)
      return response
    })
    .catch((Error) => {
      throw Error
    })
  const userData: User = {
    username: response.data.Username,
    description: response.data.Description
  }
  useUserStore().changeUsername(userData.username)
  return userData
}
