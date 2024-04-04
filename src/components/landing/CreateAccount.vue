<template>
  <div>
    <div class="accountCreation">
      <div class="inputDivs">
        <p>Pick a username</p>
        <input v-model="username" type="text" id="username" autocomplete="username" />
      </div>
      <div class="takenDiv">
        <div v-if="status === 401" class="invalidRequest">
          <p>Username is taken.</p>
        </div>
        <div v-else-if="status === 500" class="invalidRequest">
          <p>Error.</p>
        </div>
      </div>
      <div class="inputDivs">
        <p>Make a Password</p>
        <input v-model="password" type="password" id="password" autocomplete="new-password" />
      </div>
      <div class="loginButtonDiv">
        <button class="positiveButton" @click="postCreateAccount">Create</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { createAccount } from '@/middleware/auth'
const username = ref('')
const password = ref('')
let status = ref(0)

const postCreateAccount = async () => {
  if (username.value != '' && password.value != '') {
    status.value = await createAccount(username.value, password.value)
  }
}
</script>

<style scoped>
.takenDiv {
  height: 20px;
}
</style>
