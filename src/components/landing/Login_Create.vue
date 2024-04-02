<template>
    <div class="loginCreateDiv">
        <div class="backButtonDiv" v-if="chosenState != 0">
            <button 
            class="backButton negativeButton"
            @click="chosenState=0"
            >Back</button>
        </div>
        <div v-if="chosenState==0">
            <div>
                <button class="positiveButton" @click="chosenState=1">Login</button>
            </div>
            <div>
                <button class="positiveButton" @click="chosenState=2">Create Account</button>
            </div>
        </div>
        <div v-else-if="chosenState==1">
            <LoginComponent/>
        </div>
        <div v-else>
            <CreateAccount/>
        </div>
    </div>
</template>
<script setup lang=ts>
import { ref } from 'vue'
import LoginComponent from './LoginComponent.vue';
import CreateAccount from './CreateAccount.vue'

const chosenState = ref(0);

</script>

<style scoped>
.loginCreateDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
}
.backButton {
    height: 100%;
}

.backButtonDiv {
    margin-right: 10px;
    height: 20%;
}
</style>