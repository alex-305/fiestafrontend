<template>
  <div>
    <NavBar />
  </div>
  <div class="containerDiv">
    <div class="boxShadow nodeDiv inputDiv">
      <h2>Title</h2>
      <input class="titleInput" type="text" autocomplete="off" v-model="title" />
    </div>
    <br />
    <div class="boxShadow nodeDiv inputDiv">
      <h2>Pics<span class="smaller"> or it didn't happen </span></h2>
      <Uploader @newImage="handleNewImage" />
    </div>
    <br />
    <div class="manyViewDiv imagesDiv">
      <div v-for="(i, index) in images.slice().reverse()" :key="i.filename">
        <img :src="i.imageURL" />
        <button @click="removeImage(i.filename, index)">X</button>
      </div>
    </div>
    <div>
      <button class="createButton" @click="createFiesta">Create</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import NavBar from '@/components/NavBar.vue'
import type { Fiesta } from '@/types/fiesta'
import { postFiesta } from '@/middleware/fiesta'
import { DeleteImage } from '@/middleware/image'
import Uploader from '@/components/fiesta/UploaderComponent.vue'
import type { Image } from '@/types/image'
import router from '@/router'

const title = ref('')
const images = ref<Image[]>([])

const handleNewImage = (image: Image) => {
  console.log(image)
  images.value.push(image)
}

const removeImage = async (url: string, index: number) => {
  try {
    await DeleteImage(url)
    images.value.splice(index, 1)
  } catch (error) {
    console.error(error)
  }
}

onBeforeUnmount(() => {
  let i = 0
  for (const element of images.value) {
    console.log('removing file in index ' + i)
    removeImage(element.filename, i++)
  }
})

const createFiesta = async () => {
  try {
    const fiesta: Fiesta = {
      title: title.value,
      images: images.value.map((image) => image.filename)
    }

    const response: string = await postFiesta(fiesta)
    images.value = []
    router.push(response)
  } catch (error) {
    console.error(error)
  }
}
</script>

<style scoped>

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
  box-shadow:
    0 4px 16px 0 #e1ff8d42,
    0 6px 20px 0 #e1ff8d42;
}

.titleInput {
  width: 90%;
  font-size: 30px;
  height: 35px;
  border: none;
  background: linear-gradient(to right, #73d1eea8, #85dead);
}

.inputDiv {
  background: linear-gradient(to right, #3ed2ff94, #85dead);
}

.createButton {
  height: 70px;
  width: 140px;
  font-size: 30px;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.904);
}

h2 {
  padding: 0px;
  margin: 0px;
}

* {
  margin: 0px;
  padding: 0px;
}

.smaller {
  font-size: 12px;
}
</style>
