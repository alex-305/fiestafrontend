import routes from '@/assets/routes.json'
import { useUserStore } from '@/stores/UserStore'

export const getRoutes = () => {
  const userStore = useUserStore()
  const clone = JSON.parse(JSON.stringify(routes))
  clone[2].url += userStore.getUsername()
  return clone
}
