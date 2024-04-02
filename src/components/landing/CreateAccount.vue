<template>
    <div>
        <div class="accountCreation">
            <div class="inputDivs">
                <p>Pick a username</p>
                <input
                v-model="username"
                type="text"
                id="username"
                >
            </div>
            <div class="inputDivs">
                <p>Make a Password</p>
                <input
                v-model="password"
                type="password"
                id="password"
                >
            </div>
            <div class="loginButtonDiv">
            <button class="positiveButton" @click="postCreateAccount">Create</button>
        </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { createAccount } from '@/Helpers/http/auth';
const username = ref("")
const password = ref("")

const postCreateAccount = () => {
    if(username.value != "" && password.value != "") {
        createAccount(username.value, password.value) 
    }
}

</script>

<style scoped>
</style>