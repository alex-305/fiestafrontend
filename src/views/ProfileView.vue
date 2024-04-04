<template>
  <div>
    <NavBar />
  </div>
  <div v-if="isDataloaded" class="containerDiv">
    <UserInfoComponent :username="username" :description="description" :canEdit="canEdit" />
    <br />
    <div class="fiestasDiv">
      <h2>Fiestas</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import UserInfoComponent from '@/components/profile/UserInfoComponent.vue'
import { GetUser } from '@/middleware/getuser'
import type { ResponseData } from '@/middleware/getuser'
import { onBeforeMount, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const username = ref('test')
const description = ref('another test')
const canEdit = ref(false)
const isDataloaded = ref(false)

onBeforeMount(async () => {
  const route = useRoute()
  const uname = route.params.username.toString()

  try {
    const response: ResponseData = await GetUser(uname)
    console.log('username.value: ' + username.value)
    username.value = response.user.username
    console.log(response.user.username)
    description.value = response.user.description
    canEdit.value = response.canEdit
    isDataloaded.value = true
  } catch {
    console.error(Error)
  }
})

// onMounted(async () => {
//     const route = useRoute()

//     const uname = route.params.username.toString()
//     try {
//         const response:ResponseData = await GetUser(uname);
//         username.value = response.user.username
//         description.value = response.user.description
//         canEdit.value = response.canEdit
//     } catch {
//         console.error(Error)
//     }

// })
</script>

<style scoped>
.userDivs {
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #e7aeff7a, #ae73ee7a);
  align-items: center;
}

.data {
  margin: 0px;
  padding: 0px;
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
