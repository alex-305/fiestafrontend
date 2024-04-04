<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { AuthenticateToken } from '@/middleware/jwt'
import { useUserStore } from '@/stores/UserStore'
import type { User } from '@/middleware/getuser'
import { PushHomeIfAtLanding } from '@/Helpers/routing/routeHandler'

const userStore = useUserStore()

onMounted(async () => {
  try {
    const userData: User = await AuthenticateToken()

    userStore.changeUsername(userData.username)
    PushHomeIfAtLanding()
  } catch (err) {
    console.log(err)
  }
})
</script>

<style scoped></style>
