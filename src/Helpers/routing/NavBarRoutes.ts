import { useUserStore } from '@/stores/UserStore'
import routes from '@/assets/routes.json'

export const getRoutes = () => {
  const username = useUserStore().getUsername()
  const clone = JSON.parse(JSON.stringify(routes))
  clone[2].url += username
  return clone
}
