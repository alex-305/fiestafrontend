import type { User } from '@/middleware/getuser'
import { router } from '../../main'
import { getRoutes } from './NavBarRoutes'
import { AuthenticateToken } from '@/middleware/jwt'
import { useUserStore } from '@/stores/UserStore'

const getProfile = async () => {
  const userData: User = await AuthenticateToken()
  const userStore = useUserStore()
  userStore.changeUsername(userData.username)
}

export const pushRoute = (index: number) => {
  router.push(getPath(index))
}

const getPath = (index: number) => {
  return getRoutes()[index].url
}

export const pushProfile = async() => {
  await getProfile()
  pushRoute(2)
}
