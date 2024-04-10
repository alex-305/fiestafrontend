<template>
  <div 
  @drop="handleDroppedFile"
  @dragover.prevent>
    <button @click="buttonClicked" class="plusButton">+</button>
    <input id="file-upload" type="file" accept="image/*" :onchange="handleSelectedFile" />
    <div v-if="badUpload" class="invalidRequest">
      <p>File could not be read. Try again.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SERVER_BASE_URL } from '@/Helpers/server'
import { PostImage } from '@/middleware/image'
import { ref } from 'vue'
import type { Image } from '@/types/image'

const badUpload = ref(false)

const buttonClicked = () => {
  const fileInput = document.getElementById('file-upload')
  if (fileInput instanceof HTMLElement && fileInput != null) {
    fileInput.click()
  }
}

const emit = defineEmits<{
  (e: 'newImage', image: Image): void
}>()

const handleSelectedFile = async () => {
  const fileInput = document.getElementById('file-upload') as HTMLInputElement
  if (fileInput && fileInput.files && fileInput.files.length > 0) {
    const file = fileInput.files[0]
    await postFile(file)
  }
}

const postFile = async(file:File) => {
  try {
    const fileURL = await PostImage(file)
    badUpload.value = false

    let newImage: Image = {
      filename: fileURL,
      imageURL: SERVER_BASE_URL + '/image/' + fileURL
    }
    emit('newImage', newImage)
  } catch (error) {
    badUpload.value = true
    console.error(error)
  }
}

const handleDroppedFile = async(event:DragEvent) => {
  event?.preventDefault()
  const files = event?.dataTransfer?.files
  if(files!=undefined && files.length > 0) {
    await postFile(files[0])
  }
}
</script>

<style scoped>
.imagesDiv {
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  box-shadow:
    0 4px 16px 0 #e1ff8d42,
    0 6px 20px 0 #e1ff8d42;
}

.plusButton {
  height: 100px;
  width: 100px;
  border-radius: 20%;
  font-size: 60px;
  margin: auto;
}

.wrapper {
  font-size: 100px;
  cursor: pointer;
  width: 100%;
  box-shadow:
    0 4px 16px 0 rgba(0, 0, 0, 0.1),
    0 6px 20px 0 rgba(0, 0, 0, 0.1);
}

.wrapper:hover {
  box-shadow:
    0 4px 16px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.2);
}

* {
  margin: 0px;
  padding: 0px;
}

input[type='file'] {
  display: none;
}
</style>
