<template>
  <div class="container staticBoxShadow">
    <div v-for="view in viewsList" :key="view">
      <button
        :class="{
          active: activeElement === view,
          inactive: activeElement !== view
        }"
        @click="clickedButton(view)"
      >
        {{ view }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useListTypeStore } from  '@/stores/FiestaListType'

const typeStore = useListTypeStore()

const activeElement = ref(typeStore.getType())

const emit = defineEmits<{
  (e: 'change', type: string): void
}>()

const clickedButton = (element: string) => {
  activeElement.value = element
  typeStore.changeType(element)
  emit('change', element)
}

const viewsList = ref<string[]>(['Latest','Following', 'Popular'])
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  height: 50px;
  width: 300px;
  background: linear-gradient(to right, #e6dbdb, #b9aeae);
  border-radius: 20px;
  align-items: center;
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
