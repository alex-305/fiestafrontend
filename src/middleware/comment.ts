import { SERVER_BASE_URL } from '@/Helpers/server'
import axios from 'axios'
import type { Comment } from '@/types/comment'

type CommentToSend = {
    content:string,
    fiestaid:string
}

export const postComment = async (content:string, fiestaid:string):Promise<Comment> => {
    const token = localStorage.getItem('jwt_token')

    const comment:CommentToSend = {
        content: content,
        fiestaid: fiestaid
    }

    return await axios
    .post(SERVER_BASE_URL + '/fiesta/' + fiestaid + '/comments', JSON.stringify(comment), {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((response) => {
        const res = response.data
        const commentResponse:Comment = {
            content: res.content,
            id: res.id,
            username: res.username,
            post_date: res.post_date,
        }
        console.log(res)
        return commentResponse
    })
    .catch((error) => {
        throw error
    })
}

export const getComments = async(fiestaid:string):Promise<Comment[]> => {
    return await axios
    .get(SERVER_BASE_URL + '/fiesta/' + fiestaid + '/comments')
    .then((response) => {
        const comments:Comment[] = response.data
        return comments
    })
    .catch((error) => {
        throw error
    })
}