import axios from 'axios'
import { SERVER_BASE_URL } from '../server'

export const login = async (username:string, password:string) => {
    try {
        console.log("Sending username: " + username + " and pasword: " + password)
        const response = await axios.post(SERVER_BASE_URL+'/login', {
            username: username,
            password: password
    },
    {
        headers: {
            'Content-Type' : 'application/json'
        }
    });
    return response.status
    } catch(err) {
        console.log("Error: ", err)
            return err.response.status
    }
}

export const createAccount = async(username:string, password:string) => {
    try {
        const response = await axios.post(SERVER_BASE_URL+'/createAccount', {
            username: username,
            password: password
        },
        {
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        return response.status
    } catch(err) {
        console.log('Error: ', err)
        return err.response.status
    }
}