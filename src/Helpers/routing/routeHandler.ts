import { router } from '../../main'
import { getRoutes } from './NavBarRoutes'

export const routeLeft = () => {
  let currentIndex = getIndex(router.currentRoute.value.path)
  if (currentIndex != 0) {
    pushRoute(--currentIndex)
  }
}
export const routeRight = () => {
  let currentIndex = getIndex(router.currentRoute.value.path)
  if (currentIndex != getRoutes().length - 1) {
    pushRoute(++currentIndex)
  }
}
export const pushRoute = (index: number) => {
  router.push(getPath(index))
}

const getPath = (index: number) => {
  return getRoutes()[index].url
}

const getIndex = (url: string) => {
  return getRoutes().findIndex((route: { url: string }) => route.url === url)
}
