<template>
  <div class="navbar">
    <button v-for="route in routes"
        class="navnode"
        :key="route.url"
        @click="routeHandler(route.url)"
        :class="{'active': $route.path === route.url, 'inactive': $route.path !== route.url}"
        >{{ route.name }}</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { routeLeft, routeRight } from '@/Helpers/routing/routeHandler'
import { getRoutes } from '@/Helpers/routing/NavBarRoutes'
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  document.addEventListener('keyup', handleArrowKeys)
})

const handleArrowKeys = (event:KeyboardEvent) => {
  if(event.ctrlKey && !event.shiftKey && !event.altKey && !event.metaKey) {
    if(event.key === 'ArrowLeft') {
      routeLeft()
    } else if(event.key === 'ArrowRight') {
      routeRight()
    }
  }
}

const router = useRouter()
const routes = getRoutes()

const routeHandler = (url: string) => {
  router.push(url)
}

onUnmounted(() => {
  document.removeEventListener('keyup', handleArrowKeys)
})

</script>

<style scoped>

.navbar {
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #242424;
  margin-bottom: 20px;
  border-radius: 10px;
}


.active {
  color: var(--bodyColor);
}

.inactive {
  color: white;
  background-color: var(--darkerbgColor);
  font-size: 15px;
}

.navnode {
  margin-left: 5px;
  margin-right: 5px;
}

</style>
@/assets/Helpers/routeHandler