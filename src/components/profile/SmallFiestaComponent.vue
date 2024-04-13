<template>
  <a :href="'/user/' + props.username + '/fiesta/' + props.id">
    <div class="boxShadow container">
      <img :src="props.picURL" />
      <div class="overlayedText">
        <h3>{{ props.title }}</h3>
        <div class="divider"></div>
        <h4>
          <a :href="userProfile">@{{ props.username }}</a>
        </h4>
        <div class="divider"></div>
        <h5>{{ FormatDate(new Date(props.post_date)) }}</h5>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { FormatDate } from '@/Helpers/date/date'
const props = defineProps({
  username: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  picURL: {
    type: String,
    required: true
  },
  post_date: {
    type: Date,
    required: true
  },
  id: {
    type: String,
    required: true
  }
})

const userProfile = '/user/' + props.username
</script>

<style scoped>
.divider {
  height: 3px;
  border-radius: 10px;
  margin: 0px;
  padding: 0px;
  background-color: #00000077;
  width: 100%;
}

.overlayedText {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.overlayedText h3 {
  color: white;
  text-shadow:
    1px 1px 10px #000000,
    1px 1px 10px #000000,
    1px 1px 10px #000000;
  text-overflow: ellipsis;
}
.overlayedText h4 {
  color: white;
  text-shadow:
    1px 1px 10px #000000,
    1px 1px 10px #000000,
    1px 1px 10px #000000;
  text-overflow: ellipsis;
}

.overlayedText h5 {
  color: white;
  text-shadow:
    1px 1px 10px #000000,
    1px 1px 10px #000000,
    1px 1px 10px #000000;
  text-overflow: ellipsis;
}

.container {
  position: relative;
  height: 250px;
  width: 250px;
  text-align: center;
  display: inline-block;
  overflow: hidden;
  border-radius: 50%;
  border: 5px ridge #fffeaa67;
}

img {
  height: 100%;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  filter: brightness(1.1) blur(2px);
}

* {
  padding: 0px;
  margin: 0px;
}
</style>
