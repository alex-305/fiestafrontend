<template>
  <div>
    <NavBar />
  </div>
  <div v-if="isDataloaded" class="containerDiv totalDiv">
    <UserInfoComponent
      :isFollowing="isFollowing"
      :username="username"
      :description="description"
      :canEdit="canEdit"
      :followerCount="followerCount"
      :followingCount="followingCount"
    />
    <br />
    <div class="fiestaTitleDiv staticBoxShadow">
      <h2>Fiestas</h2>
    </div>
    <div class="fiestasDiv">
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
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import UserInfoComponent from '@/components/profile/UserInfoComponent.vue'
import SmallFiestaComponent from '@/components/profile/SmallFiestaComponent.vue'
import type { SmallFiesta } from '@/types/fiesta'
import { GetUser, getUserFiestas } from '@/middleware/getuser'
import type { UserResponseData } from '@/middleware/getuser'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { SERVER_BASE_URL } from '@/Helpers/server'

const username = ref('')
const description = ref('')
const canEdit = ref(false)
const isFollowing = ref(false)
const isDataloaded = ref(false)
const followerCount = ref(0)
const followingCount = ref(0)
const fiestas = ref<SmallFiesta[]>([])

const route = useRoute()
const userParam = ref(useRoute().params.username as string)

const fetchUserData = async (uname: string) => {
  isDataloaded.value = false
  try {
    const userResponse: UserResponseData = await GetUser(uname)
    username.value = userResponse.user.username
    description.value = userResponse.user.description
    canEdit.value = userResponse.canEdit
    isFollowing.value = userResponse.isFollowing
    followerCount.value = userResponse.followerCount
    followingCount.value = userResponse.followingCount


    const fiestasResponse: SmallFiesta[] = await getUserFiestas(uname)
    fiestas.value = fiestasResponse

    isDataloaded.value = true
  } catch {
    console.error(Error)
  }
}

watch(() => route.params.username, async(newUser) => {
  console.log(newUser)
  await fetchUserData(newUser as string)
})

onMounted(async () => {
  await fetchUserData(userParam.value)
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

.fiestaTitleDiv {
  background: linear-gradient(to right, #e5b8b8a4, #e0d6baa4);
  border-radius: 20px;
  margin-bottom: 10px;
}
.fiestaTitleDiv h2 {
  font-size: 50px;
  text-shadow: 1px 1px 10px #ffffff;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-right: 50px;
  padding-left: 50px;
}
</style>
