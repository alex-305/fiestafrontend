import axios from 'axios'
import { SERVER_BASE_URL } from '../Helpers/server'

export const PostFollow = async (followee: string) => {
  const token = localStorage.getItem('jwt_token') ?? ''

  return await axios
    .post(SERVER_BASE_URL + '/user/follows/' + followee, null, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      return response.status
    })
    .catch((error) => {
      console.error(error)
      throw error
    })
}

export const PostLike = async (fiestaid:string) => {
    const token = localStorage.getItem('jwt_token') ?? ''

    return await axios
    .post(SERVER_BASE_URL + '/fiesta/'+fiestaid+'/like', null, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((response) => {
        return response.status
    })
    .catch((error) => {
        console.error(error)
        throw error
    })
}
