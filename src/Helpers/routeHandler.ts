import { router } from '../main'

export const routeLeft = () => {
    let currentIndex = getIndex(router.currentRoute.value.path)
    if(currentIndex!=0) {
      pushRoute(--currentIndex)
    }
  }
  
export const routeRight = () => {
    let currentIndex = getIndex(router.currentRoute.value.path)
    if(currentIndex!=routes.length-1) {
      pushRoute(++currentIndex)
    }
  }

type route = {
  id: number,
  name: string,
  url: string
}

export const routes:route[] = [
    { id: 0, name: 'Home', url: '/Home'},
    { id: 1, name: 'New Fiesta', url: '/Create' },
    { id: 2, name: 'Profile', url: '/Profile' }
  ]

const pushRoute = (index:number) => {
    router.push(getPath(index))
  }
  
const getPath = (index:number) => {
return routes[index].url
}

const getIndex = (url:string) => {
return routes.findIndex(route => route.url === url)
}