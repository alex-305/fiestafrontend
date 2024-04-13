import axios from 'axios'
import { SERVER_BASE_URL } from '@/Helpers/server'

export const postPermission = async (username:string, fiestaid:string) => {
    const token = localStorage.getItem('jwt_token')

    console.log(JSON.stringify(username))

    return await axios
    .post(SERVER_BASE_URL + '/fiesta/' +fiestaid+'/permissions',JSON.stringify({username: username}), {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((response) => {
        return response
    })
    .catch((error) => {
        throw error
    })
}

export const revokePermission = async (username:string, fiestaid:string) => {
    const token = localStorage.getItem('jwt_token')

    return await axios
    .delete(SERVER_BASE_URL + '/fiesta/' + fiestaid + '/permissions/' + username, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((response) => {
        return response
    })
    .catch((error) => {
        throw error
    })
}

export const getPermissions = async(fiestaid:string) => {
    return await axios
    .get(SERVER_BASE_URL + '/fiesta/' + fiestaid + '/permissions')
    .then((response) => {
        console.log(response.data.usernames)
        return response.data.usernames
    })
    .catch((error) => {
        throw error
    })
}