import { SERVER_BASE_URL } from '@/Helpers/server'
import axios from 'axios'

export const PostImage = async (image: File, fiestaid:string=""): Promise<string> => {
  const token = localStorage.getItem('jwt_token') ?? ''
  console.log(fiestaid)
  const formData = new FormData()
  formData.append('image', image)
  formData.append('fiestaid', fiestaid)

  const response = await axios
    .post(SERVER_BASE_URL + '/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      return response
    })
    .catch((error) => {
      throw error
    })

  return response.data.Url
}

export const DeleteImage = async (imageURL: string) => {
  const token = localStorage.getItem('jwt_token') ?? ''

  const response = await axios
    .delete(SERVER_BASE_URL + '/image/' + imageURL, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      return response
    })
    .catch((error) => {
      throw error
    })

  return response.status
}
