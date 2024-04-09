<template>
  <div class="container">
    <div>
      <div class="inputDivs">
        <p>Username</p>
        <input name="username" type="text" autocomplete="username" v-model="username" />
      </div>
      <div class="inputDivs">
        <p>Password</p>
        <input name="password" type="password" autocomplete="current-password" v-model="password" />
      </div>
    </div>
    <div class="loginButtonDiv">
      <button class="loginButton positiveButton" @click="postLogin">Login</button>
    </div>
  </div>
  <div class="invalidRequest">
    <p v-if="StatusCode === 401">Invalid password</p>
  </div>
</template>

<script setup lang="ts">
import { pushRoute } from '@/Helpers/routing/routeHandler'
import { login } from '@/middleware/auth'
import { AuthenticateToken } from '@/middleware/jwt'
import { onMounted, ref } from 'vue'

onMounted(async () => {
  try {
    await AuthenticateToken()
    pushRoute(0)
  } catch (error) {
    console.log(error)
  }
})

const password = ref('')
const username = ref('')
let StatusCode = ref(0)
const postLogin = async () => {
  if (password.value != '' && username.value != '') {
    StatusCode.value = (await login(username.value, password.value)) ?? 0
    console.log(StatusCode.value)
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex: row;
}
.inputDivs {
  display: flex;
}

input {
  font-size: 20px;
}
.loginButtonDiv {
  margin-left: 10px;
  height: 100px;
}
.loginButton {
  height: 100%;
}
</style>
@/assets/Helpers/server@/assets/Helpers/server
