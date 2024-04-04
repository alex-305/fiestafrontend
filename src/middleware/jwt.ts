

export const activeJWT = (token:string) => {
    if(token==="") return false
    const expiration = JSON.parse(atob(token.split('.')[1])).exp
    const expirationMS = expiration * 1000 
    return Date.now() > expirationMS
}

export const setJWT = (token:string) => {
    console.log("setting jwt token")
    localStorage.setItem('jwt_token', token)
}