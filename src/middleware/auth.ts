import axios from 'axios'
import { pushRoute } from '@/Helpers/routing/routeHandler'
import { SERVER_BASE_URL } from '../Helpers/server'
import { activeJWT, setJWT } from './jwt'

export const login = async (username:string, password:string) => {
    try {
        let token
        if(localStorage.getItem('jwt_token')) {
            token = localStorage.getItem
        } else {
            token = ""
        }

        console.log("Sending username: " + username + " and pasword: " + password)
        const response = await axios.post(SERVER_BASE_URL+'/login', {
            username: username,
            password: password,
            jwt_token: token
        },
        {
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        console.log(response)
        setJWT(response.data.token)
        console.log("should've set jwt token now")
        pushRoute(0)
        return response.status
    } catch(err) {
        console.log("Error: ", err)
            return err.response.status
    }
}

export const createAccount = async(username:string, password:string) => {
    try {
        if(activeJWT(localStorage.getItem('jwt_token') ?? "")) {
            pushRoute(0)
            return
        } else {
        const response = await axios.post(SERVER_BASE_URL+'/createAccount', {
            username: username,
            password: password
        },
        {
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        console.log(response)
        setJWT(response.data.token)
        pushRoute(0)
        return response.status
        }
    } catch(err) {
        console.log('Error: ', err)
        return err.response.status
    }
}