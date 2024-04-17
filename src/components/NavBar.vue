<template>
  <div class="navbar">
    <button
      v-for="route in routes"
      class="navnode"
      :key="route.url"
      @click="routeHandler(route.id)"
      :class="{ active: $route.path === route.url, inactive: $route.path !== route.url }"
    >
      {{ route.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { pushProfile, pushRoute } from '@/Helpers/routing/routeHandler'
import { getRoutes } from '@/Helpers/routing/NavBarRoutes'

const routes = getRoutes()

const routeHandler = async (id: number) => {
  if (id === 2) {
    await pushProfile()
  }
  pushRoute(id)
}

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
  color: white;
  text-shadow: 2px 2px 4px black;
  background: linear-gradient(to right, var(--buttonGreen), var(--buttonGreenAlt));
}

.inactive {
  color: var(--bodyColor);
  background: linear-gradient(to right, #bcffb1, #bbfffa);
  font-size: 15px;
}

.navnode {
  margin-left: 5px;
  margin-right: 5px;
}
</style>
@/assets/Helpers/routeHandler
