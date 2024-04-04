import axios from 'axios'
import { pushRoute } from '@/Helpers/routing/routeHandler'
import { SERVER_BASE_URL } from '../Helpers/server'
import { setToken } from '@/middleware/jwt'

export const login = async (username: string, password: string) => {
  let token
  if (localStorage.getItem('jwt_token')) {
    token = localStorage.getItem
  } else {
    token = ''
  }

  console.log('Sending username: ' + username + ' and pasword: ' + password)
  const response = await axios
    .post(
      SERVER_BASE_URL + '/login',
      {
        username: username,
        password: password,
        jwt_token: token
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    .then((response) => {
      console.log(response)
      setToken(response.data.token)
      console.log("should've set jwt token now")
      pushRoute(0)
      return response
    })
    .catch((err) => {
      throw err
    })
  return response.status
}

export const createAccount = async (username: string, password: string) => {
  const response = await axios
    .post(
      SERVER_BASE_URL + '/createAccount',
      {
        username: username,
        password: password
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    .then((response) => {
      console.log(response)
      setToken(response.data.token)
      pushRoute(0)
      return response
    })
    .catch((err) => {
      console.log(err)
      throw err
    })
  return response.status
}
