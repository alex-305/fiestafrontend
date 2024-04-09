<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import type { User } from './middleware/getuser'
import { AuthenticateToken } from './middleware/jwt'
import { useUserStore } from './stores/UserStore'

onMounted(async () => {
  const userData: User = await AuthenticateToken()
  const userStore = useUserStore()
  userStore.changeUsername(userData.username)
})
</script>

<style scoped></style>
