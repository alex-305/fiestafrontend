
export const GetToken = () => {
    let token:string = ""
    if(localStorage.getItem('jwt_token')) {
        token = localStorage.getItem('jwt_token') ?? ""
    }
    return token
}

const GetUsernameFromToken = async () => {
    const token = GetToken()

}