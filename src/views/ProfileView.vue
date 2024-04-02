<template>
    <div>
        <NavBar/>
    </div>
    <div class="containerDiv">
        <div class="staticBoxShadow nodeDiv userDivs">
            <h3 class="data">@{{ username }}</h3>
            <div class="nameDescDivider"></div>
            <p class="data">{{ biography }}</p>
        </div>
        <br>
        <div class="fiestasDiv">
            <h2>Fiestas</h2>
        </div>
    </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
const username = "alex"
const biography = "something about me whatever lorem ipsum the quick brown fox jumps over the lazy dog type"

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
    background-color: #BB8FCE;
    filter: brightness(0.8);
    width: 97%;
}

.fiestasDiv {
    background-color: var(--darkerbgColor);
    border-radius: 20px;
}
</style>