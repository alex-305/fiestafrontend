<template>
    <div class="titleDiv">
        <h1>Fiesta.Pics</h1>
        <p>or it didn't happen</p>
    </div>
    <div class="loginCreateDiv">
        <div class="backButtonDiv" v-if="chosenState != 0">
            <button 
            class="backButton negativeButton"
            @click="chosenState=0"
            >Back</button>
        </div>
        <div class="loginCreateButtons" v-if="chosenState==0">
            <div>
                <button class="positiveButton" @click="chosenState=1">Login</button>
            </div>
            <div>
                <h1>or</h1>
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
    margin-top: 50px;
}
.backButton {
    height: 100%;
}

.backButtonDiv {
    margin-right: 10px;
    height: 20%;
}

.loginCreateButtons div {
    display: flex;
    justify-content: center;
    padding: 5px;
}
.loginCreateButtons div button {
    font-size: 40px;
}

.titleDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
}
.titleDiv p {
    margin-top: 0px;
    padding: 0px;
}

.titleDiv h1 {
    margin-bottom: 0px;
    margin-top: 0px;
    padding: 0px;
    font-weight: bold;
    font-size: 100px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>