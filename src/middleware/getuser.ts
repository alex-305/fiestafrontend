import axios from 'axios'
import { SERVER_BASE_URL } from '../Helpers/server'
import { GetToken } from '@/Helpers/token'

export type User = {
    username:string,
    description:string
}

export const GetUser = async (user:string):Promise<User> => {

    const token = GetToken();

    const requestData = {
        Authorization: token
    }

    const response = await axios.get(SERVER_BASE_URL+'/user/'+user, {
        params: requestData
    })
    .then(function (response) {
        console.log("success:", response.data.User)
        console.log(response.data.User.Username)

        return response
    })
    .catch(function (error) {
        throw error
    }) 

    const userData:User ={
        username: response.data.User.Username,
        description: response.data.User.Description
    }
    return userData

}