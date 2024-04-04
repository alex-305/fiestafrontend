<template>
  <div class="staticBoxShadow nodeDiv userDivs">
    <div>
      <h3 class="data">@{{ username }}</h3>
    </div>
    <div class="nameDescDivider"></div>
    <div v-if="!canEdit">
      <p class="data">{{ description }}</p>
    </div>
    <div v-else>
        <textarea
        class="data"
        v-model="description"
        placeholder="Make your description..."
        maxlength="300"
        ></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

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

const username = props.username
const description = ref(props.description)
const canEdit = props.canEdit
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
