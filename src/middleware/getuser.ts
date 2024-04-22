import axios from 'axios'
import { SERVER_BASE_URL } from '../Helpers/server'
import type { Fiesta, SmallFiesta } from '@/types/fiesta'

export type User = {
  username: string
  description: string
}
export type UserResponseData = {
  user: User
  canEdit: boolean
  isFollowing: boolean
  followerCount: number
  followingCount: number
}

export type FiestasResponseData = {
  fiestas: Fiesta[]
}

export const GetUser = async (user: string): Promise<UserResponseData> => {
  const token = localStorage.getItem('jwt_token') ?? ''

  return await axios
    .get(SERVER_BASE_URL + '/user/' + user, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log('success:', response.data.User)
      console.log(response.data)
      const userData: User = {
        username: response.data.User.Username,
        description: response.data.User.Description
      }

      const responseData: UserResponseData = {
        user: userData,
        canEdit: response.data.CanEdit,
        isFollowing: response.data.IsFollowing,
        followerCount: response.data.FollowerCount,
        followingCount: response.data.FollowingCount,
      }

      return responseData
    })
    .catch((error) => {
      throw error
    })
}

export const getUserFiestas = async (user: string): Promise<SmallFiesta[]> => {
  return await axios
    .get(SERVER_BASE_URL + '/user/' + user + '/fiesta')
    .then((response) => {
      console.log(response)
      const responseData: SmallFiesta[] = response.data
      return responseData
    })
    .catch((error) => {
      console.error(error)
      throw error
    })
}
