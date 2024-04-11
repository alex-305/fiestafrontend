<template>
  <div>
    <NavBar />
  </div>
  <div class="container">
    <div>
      <HomeToggleComponent @change="handleChange" />
    </div>
    <div>
      <div v-if="isDataloaded" class="fiestasDiv">
        <div v-for="fiesta in fiestas" :key="fiesta.id">
          <SmallFiestaComponent
            :post_date="fiesta.post_date"
            :id="fiesta.id"
            :username="fiesta.username"
            :title="fiesta.title"
            :picURL="SERVER_BASE_URL + '/image/' + fiesta.coverimage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SERVER_BASE_URL } from '@/Helpers/server'
import NavBar from '@/components/NavBar.vue'
import SmallFiestaComponent from '@/components/profile/SmallFiestaComponent.vue'
import { getFiestaList } from '@/middleware/fiesta'
import type { SmallFiesta } from '@/types/fiesta'
import { onBeforeMount, ref } from 'vue'
import HomeToggleComponent from '@/components/home/HomeToggleComponent.vue'

let typeValue = 'Following'

const handleChange = async (listType: string) => {
  if (listType === typeValue) return
  const fiestasResponse: SmallFiesta[] = await getFiestaList(listType)
  fiestas.value = fiestasResponse
  typeValue = listType
}

const fiestas = ref<SmallFiesta[]>([])
const isDataloaded = ref(false)

onBeforeMount(async () => {
  try {
    const fiestasResponse: SmallFiesta[] = await getFiestaList('Following')
    fiestas.value = fiestasResponse

    isDataloaded.value = true
  } catch {
    console.error(Error)
  }
})
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
}

.container div {
  margin-bottom: 10px;
}
.fiestasDiv {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.fiestasDiv div {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 10px;
}
</style>
