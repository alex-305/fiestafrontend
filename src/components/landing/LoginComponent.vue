<template>
    <div class="container">
        <div>
            <div class="inputDivs">
            <p>Username</p>
            <input
            type="text"
            v-model="username">
            </div>
            <div class="inputDivs">
            <p>Password</p>
            <input
            type="password"
            v-model="password">
            </div>
        </div>
        <div class="loginButtonDiv">
            <button class="loginButton positiveButton" @click="postLogin">Login</button>
        </div>
    </div>
    
</template>

<script setup lang="ts">
import { login } from '@/Helpers/http/auth'
import { ref } from 'vue'

    const password = ref("");
    const username = ref("");
    const postLogin = () => { 
            if(password.value!="" && username.value!="") {
            login(username.value, password.value)
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

</style>@/assets/Helpers/server@/assets/Helpers/server