<template>
  <div>
    <NavBar />
  </div>
  <div v-if="isDataloaded" class="containerDiv totalDiv">
    <UserInfoComponent :username="username" :description="description" :canEdit="canEdit" />
    <br />
    <div class="fiestasDiv">
      <h2>Fiestas</h2>
    </div>
    <SmallFiesta :username="username" :title="smallTitle" :picURL="picURL"/>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import UserInfoComponent from '@/components/profile/UserInfoComponent.vue'
import SmallFiesta from '@/components/profile/SmallFiesta.vue'
import { GetUser } from '@/middleware/getuser'
import type { ResponseData } from '@/middleware/getuser'
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'

const smallTitle = ref('Adrian\'s tubular Birthday Bash')
const picURL = ref('http://localhost:8080/image/adrian_2PtAgDvPT8h3uVelu3ossLkwb5a0OGyIDYugPKc3BMCW6899.JPG')

const username = ref('')
const description = ref('')
const canEdit = ref(false)
const isDataloaded = ref(false)

onBeforeMount(async () => {
  const route = useRoute()
  const uname = route.params.username.toString()

  try {
    const response: ResponseData = await GetUser(uname)
    username.value = response.user.username
    description.value = response.user.description
    canEdit.value = response.canEdit
    isDataloaded.value = true
  } catch {
    console.error(Error)
  }
})
</script>

<style scoped>
.userDivs {
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #e7aeff7a, #ffa9c27a);
  align-items: center;
}

.data {
  margin: 0px;
  padding: 0px;
}

.totalDiv {
  height: 300px;
}

.fiestasDiv {
  background-color: var(--darkerbgColor);
  border-radius: 20%;
}
.fiestasDiv h2 {
  padding-right: 10px;
  padding-left: 10px;
}
</style>
