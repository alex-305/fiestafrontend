import axios from 'axios'
import { SERVER_BASE_URL } from '../Helpers/server'

export type User = {
  username: string
  description: string
}
export type ResponseData = {
  user: User
  canEdit: boolean
}

export const GetUser = async (user: string): Promise<ResponseData> => {
  const token = localStorage.getItem('jwt_token') ?? ''

  const response = await axios
    .get(SERVER_BASE_URL + '/user/' + user, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log('success:', response.data.User)
      console.log(response.data)

      return response
    })
    .catch((error) => {
      throw error
    })

  const userData: User = {
    username: response.data.User.Username,
    description: response.data.User.Description
  }

  const responseData: ResponseData = {
    user: userData,
    canEdit: response.data.CanEdit
  }
  return responseData
}
