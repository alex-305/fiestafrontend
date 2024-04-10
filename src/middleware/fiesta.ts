import { SERVER_BASE_URL } from '@/Helpers/server'
//import type { comment } from '@/types/comment'
import type { Fiesta, SmallFiesta } from '@/types/fiesta'
import axios from 'axios'

export type ResponseData = {
  username: string
  title: string
  images: string[]
  can_edit: boolean
  post_date: Date
  userliked: boolean
  likecount: number
  //comments: comment[]
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

export const getFiesta = async (fiesta: string): Promise<ResponseData> => {
  const token = localStorage.getItem('jwt_token') ?? ''

  return await axios
    .get(SERVER_BASE_URL + fiesta, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      const responseData: ResponseData = {
        username: response.data.username,
        title: response.data.title,
        images: response.data.images,
        can_edit: response.data.can_edit,
        post_date: new Date(response.data.post_date),
        userliked: response.data.userliked,
        likecount: response.data.likecount,
        //comments: JSON.parse(response.data.comments)
      }
      console.log(response)
      return responseData
    })
    .catch((error) => {
      throw error
    })
}

export const getFiestaList = async (type:string): Promise<SmallFiesta[]> => {
  const token = localStorage.getItem('jwt_token') ?? ''

  return await axios
    .get(SERVER_BASE_URL + '/fiesta/'+type.toLowerCase(), {
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
    .then((response) => {
      const responseData: SmallFiesta[] = response.data
      return responseData
    })
    .catch((error) => {
      console.error(error)
      throw error
    })
}
