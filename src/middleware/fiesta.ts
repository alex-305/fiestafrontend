import { SERVER_BASE_URL } from '@/Helpers/server'
import type { Comment } from '@/types/comment'
import type { Fiesta, SmallFiesta } from '@/types/fiesta'
import axios from 'axios'

export type ResponseData = {
  username: string
  title: string
  images: string[]
  is_owner: boolean
  can_post: boolean
  post_date: Date
  userliked: boolean
  likecount: number
  comments: Comment[]
}

export const postFiesta = async (fiesta: Fiesta): Promise<string> => {
  const token = localStorage.getItem('jwt_token') ?? ''

  const response = await axios
    .post(SERVER_BASE_URL + '/fiesta', JSON.stringify(fiesta), {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log(response)
      return response
    })
    .catch((error) => {
      throw error
    })
  return response.data.path
}

export const DeleteFiesta = async(fiestaid: string) => {
  const token = localStorage.getItem('jwt_token') ?? ''

  return await axios
  .delete(SERVER_BASE_URL + '/fiesta/' + fiestaid, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    throw error
  })
}

export const getFiesta = async (fiestaid: string): Promise<ResponseData> => {
  const token = localStorage.getItem('jwt_token') ?? ''

  return await axios
    .get(SERVER_BASE_URL + '/fiesta/' + fiestaid, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      const responseData:ResponseData = response.data
      console.log(response)
      return responseData
    })
    .catch((error) => {
      throw error
    })
}

export const getFiestaList = async (type: string): Promise<SmallFiesta[]> => {
  const token = localStorage.getItem('jwt_token') ?? ''

  return await axios
    .get(SERVER_BASE_URL + '/fiestas/' + type.toLowerCase(), {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.error(error)
      throw error
    })
}
