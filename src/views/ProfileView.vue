<template>
    <div>
        <NavBar/>
    </div>
    <div class="containerDiv">
        <div class="staticBoxShadow nodeDiv userDivs">
            <h3 class="data">@{{ username }}</h3>
            <div class="nameDescDivider"></div>
            <p class="data">{{ description }}</p>
        </div>
        <br>
        <div class="fiestasDiv">
            <h2>Fiestas</h2>
        </div>
    </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import { GetUser } from '@/middleware/getuser'
import type { User }  from '@/middleware/getuser'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const username = ref("")
const description = ref("")

onMounted(async () => {
    const route = useRoute()

    const uname = route.params.username.toString()
    try {
        const user:User = await GetUser(uname);
        username.value = user.username
        description.value = user.description
    } catch {
        console.error(Error)
    }

})

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
    border-radius: 20%;
}
.fiestasDiv h2 {
    padding-right: 10px;
    padding-left: 10px;
}
</style>