<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div class="parentDiv" v-if="isDataloaded">
      <div class="boxShadow nodeDiv titleDiv">
        <div>
          <h2>{{ title }}</h2>
          <h5>
            <a :href="userProfile">@{{ username }}</a>
          </h5>
        </div>
        <div class="likeDiv">
          <button v-if="!userLiked" class="likeButton" @click="clickedLike">♡</button>
          <button v-else class="likeButton" @click="clickedLike">❤️</button>
          <p>{{ likeCount }}</p>
        </div>
      </div>
      <div class="imagesDiv">
        <div v-for="i in images" :key="i">
          <img :src="SERVER_BASE_URL + '/image/' + i" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import { getFiesta } from '@/middleware/fiesta'
import type { ResponseData } from '@/middleware/fiesta'
import { SERVER_BASE_URL } from '@/Helpers/server'
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import { PostLike } from '@/middleware/useractions'

const title = ref('')
const images = ref<string[]>([])
const canEdit = ref(false)
const isDataloaded = ref(false)
const postDate = ref<Date>()
const userLiked = ref(false)
const username = ref('')
const userProfile = ref('/user/')
const fiestaid = useRoute().params.fiestaid.toString()
const likeCount = ref<number>(0)

const clickedLike = async() => {
  console.log(fiestaid)
  try {

    await PostLike(fiestaid)

    likeCount.value = userLiked.value ? likeCount.value - 1 : likeCount.value + 1

    userLiked.value = !userLiked.value

  } catch(error) {
    console.error(error)
  }

}

onBeforeMount(async () => {
  const route = useRoute()
  const fiestaPath =
    '/user/' + route.params.username.toString() + '/fiesta/' + route.params.fiestaid.toString()

  try {
    console.log(fiestaPath)
    const response: ResponseData = await getFiesta(fiestaPath)
    title.value = response.title
    username.value = response.username
    canEdit.value = response.can_edit
    images.value = response.images
    postDate.value = response.post_date
    userProfile.value += username.value
    userLiked.value = response.userliked
    likeCount.value = response.likecount
    isDataloaded.value = true
  } catch {
    console.error(Error)
  }
})
</script>

<style scoped>
.imagesDiv {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  border-radius: 20px;
}

.likeDiv {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.likeDiv p {
  font-size: 25px;
}

.imagesDiv div {
  height: 200px;
  width: 300px;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 10px;
}

.imagesDiv div img {
  height: auto;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  margin-right: 10px;
  margin-bottom: 10px;
  box-shadow:
    0 2px 16px 0 #55f1ff75,
    0 3px 20px 0 #55f1ff75;
}

.userDivs {
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #e7aeff7a, #ffa9c27a);
  align-items: center;
}

.parentDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.titleDiv {
  background: linear-gradient(to right, #bcffeb, #bfddff);
  margin-bottom: 15px;
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

* {
  margin: 0px;
  padding: 0px;
}

.likeButton {
  font-size: 30px;
  color: red;
  background: transparent;
  box-shadow: none;
}

</style>
