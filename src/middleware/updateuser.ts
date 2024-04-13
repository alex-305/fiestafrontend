import axios from 'axios'
import { SERVER_BASE_URL } from '@/Helpers/server'

export const PostUserUpdate = async (user: string, description: string) => {
  const token = localStorage.getItem('jwt_token') ?? ''

  const response = await axios
    .post(
      SERVER_BASE_URL + '/user/' + user + '/update',
      {
        Description: description
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    .then((response) => {
      console.log('success:' + response)
      return response
    })
    .catch((error) => console.error(error))

  return response
}
