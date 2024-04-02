<template>
    <div>
        <NavBar/>
    </div>
    <div class="containerDiv">
        <div class="boxShadow nodeDiv inputDiv">
            <h2>Title</h2> 
            <input
                class="titleInput" 
                type="text"
                v-model="title">
        </div>
        <br>
        <div class="boxShadow nodeDiv inputDiv">
            <h2>Pics<span class="smaller"> or it didn't happen </span></h2>
            <input 
                type="file" 
                accept="image/*"
                id="imgUpload"
                >
        </div>
        <br>
        <div>
            <button @click="createFiesta">Create</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import NavBar from '@/components/NavBar.vue';

const title = ref("")

const createFiesta = () => {
    axios.post('http://localhost:8080/api/fiestadata', {
        fiestaTitle: title,
    })
    .then(response => {
        console.log('data sent successfully: ' + response)
    })
    .catch(error => {
        console.error("Error sending data: " + error)
    })
}


</script>

<style scoped>
.titleInput {
    width: 90%;
    font-size: 30px;
    height: 35px;
    border: none;
    background: linear-gradient(to right, #73d1eea8, #85DEAD);
}

.inputDiv {
    background: linear-gradient(to right, #3ed2ff94,#85DEAD);
}

h2 {
    padding: 0px;
    margin: 0px;
}
.smaller {
    font-size: 12px;
}


</style>