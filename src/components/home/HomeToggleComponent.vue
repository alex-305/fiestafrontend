<template>
  <div class="container staticBoxShadow">
    <div v-for="view in viewsList" :key="view">
      <button
        :class="{
            active: activeElement === view, 
            inactive : activeElement !== view}"

        @click="clickedButton(view)"
        >{{ view }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeElement = ref("Following")

const emit = defineEmits<{
  (e: 'change', type: string): void
}>()

const clickedButton = (element:string) => {
    activeElement.value = element
    emit('change', element)
}

const viewsList = ref<string[]>(['Following', 'Latest'])
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  height: 50px;
  width: 200px;
  background: linear-gradient(to right, #e6dbdb, #b9aeae);
  border-radius: 20px;
}

.active {
    background: linear-gradient(to right, #d2ff80, #fbff7f);
}

.inactive {
    background: linear-gradient(to right, #00648c7c, #009d5c7c);
}

.container button {
  height: 100%;
  margin-right: 10px;
  border-radius: 20px;
  padding: 10px;
}
* {
  margin: 0px;
  padding: 0px;
  border: 0px;
}
</style>
