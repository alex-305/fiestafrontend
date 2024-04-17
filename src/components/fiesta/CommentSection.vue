<template>
  <div v-if="isDataloaded">
    <div class="staticBoxShadow commentTitleDiv">
      <h3>Comments</h3>
    </div>
    <div class="manyViewDiv">
      <div v-for="c in comments" :key="c.id">
        <CommentComponent :username="c.username" :content="c.content" />
      </div>
    </div>
    <br>
    <div class="commentBox">
      <textarea
        v-model="newComment"
        placeholder="Create a comment..."
        maxlength="300"
        class="commentBox boxShadow"
      ></textarea>
      <button 
      @click="comment"
      v-if="newComment!=='' ">Post</button>
    </div>

    <div></div>
  </div>
</template>

<script setup lang="ts">
import type { Comment } from '@/types/comment'
import CommentComponent from '@/components/fiesta/CommentComponent.vue'
import { postComment, getComments } from '@/middleware/comment'
import { onMounted, ref } from 'vue';

const newComment = ref("")
const comments = ref<Comment[]>([])
const isDataloaded = ref(false)

const props = defineProps({
  fiestaid: {
    type: String,
    required:true
  }
})

const comment = async() => {
  const comment = await postComment(newComment.value, props.fiestaid)
  comments.value.push(comment)
  newComment.value = ""
}

onMounted(async() => {
  try {
    comments.value = await getComments(props.fiestaid) ?? []
    isDataloaded.value = true
  } catch(error) {
    console.error(error)
  }
})

</script>

<style scoped>
.commentBox {
  height: 100px;
  display: flex;
  flex-direction: row;
}

.commentBox button {
  background: linear-gradient(to right, #d5fff2, #bfffbc);
}

.commentBox textarea {
  background: #bcffeb32;
  border-radius: 20px;
  font-family: inherit;
  color: inherit;
  border: none;
  resize: none;
  height: 100%;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  margin-right: 5px;
  padding: 5px;
  margin-bottom: 20px;
}
.commentBox textarea:focus {
  border-color: #bcffeb61;
  outline: none;
}

.commentTitleDiv {
  background: linear-gradient(to right, #bcffeb, #bfddff);
  margin-bottom: 15px;
  border: none;
  border-radius: 10px;
  text-align: center;
  height: 110%;
}

.commentTitleDiv h3 {
  font-size: 20px;
  padding: 5px;
}

</style>
