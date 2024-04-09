<template>
  <div class="staticBoxShadow nodeDiv userDivs">
    <div>
      <h3>@{{ username }}</h3>
    </div>
    <div class="nameDescDivider"></div>
    <div v-if="!canEdit">
      <p class="description">{{ description }}</p>
    </div>
    <div v-else class="descriptionEditDiv">
      <textarea
        v-model="newDescription"
        placeholder="Create a description..."
        maxlength="300"
        class="description"
      ></textarea>
    </div>
    <div>
      <button
        v-if="currentDescription != newDescription"
        class="saveButton"
        @click="updateDescription"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PostUserUpdate } from '@/middleware/updateuser'

const props = defineProps({
  username: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  canEdit: {
    type: Boolean,
    requiried: true
  }
})

const username = props.username ?? ''
const newDescription = ref(props.description ?? '')
const canEdit = props.canEdit ?? ''
const currentDescription = ref(props.description ?? '')

const updateDescription = () => {
  PostUserUpdate(username, newDescription.value)
  currentDescription.value = newDescription.value
}
</script>

<style scoped>
.descriptionEditDiv {
  width: 100%;
  height: 100%;
}

.description {
  font-size: 15px;
}

.saveButton {
  background: linear-gradient(to right, #faffbb, #d6ffbc);
  padding: 4px;
  margin-bottom: 5px;
}

.descriptionEditDiv textarea {
  background-color: transparent;
  font-family: inherit;
  color: inherit;
  border: none;
  resize: none;
  height: 100%;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  margin-left: 2px;
  margin-right: 2px;
}
.descriptionEditDiv textarea:focus {
  border-color: transparent;
  outline: none;
}

.userDivs {
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #e7aeff7a, #ae73ee7a);
  align-items: center;
  padding: 5px;
  max-height: 200px;
}

* {
  margin: 0px;
  padding: 0px;
}

.nameDescDivider {
  height: 3px;
  border-radius: 10px;
  margin: 0px;
  padding: 0px;
  background-color: #bb8fce;
  filter: brightness(0.8);
  width: 97%;
}
</style>
