<template>
    <div>
        <div class="userDivs">
            <div v-for="(user, index) in users" :key="user">
                <h5><a :href="'/user/'+user"
                    >@{{ user }}</a><span
                    v-if="index+1 != users.length"> | </span></h5>
                <button 
                class="negativeButton xButton"
                v-if="props.isOwner && index!==0" 
                @click="removeUser(user, index)"
                >X</button>
            </div>
        </div>
        <div v-if="props.isOwner">
            <input v-model="userToAdd" type="text">
            <button @click="addUser">ADD</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { postPermission, revokePermission, getPermissions  } from '@/middleware/permissions';

const users = ref<string[]>([])
const userToAdd = ref("")
const isDataloaded = ref(false)

const addUser = async () => {
    await postPermission(userToAdd.value, props.fiestaid)
    users.value.push(userToAdd.value)
}

const removeUser = async(username:string, index:number) => {
    await revokePermission(username, props.fiestaid)
    users.value.splice(index,1)
}

onMounted(async() => {
    users.value = await getPermissions(props.fiestaid) ?? []
    isDataloaded.value = true
})

const props = defineProps({
    fiestaid: {
        type:String,
        required: true
    },
    isOwner: {
        type:Boolean,
        required: true,
    }
})

</script>

<style scoped>
.userDivs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
}

.xButton {
    padding: 0px;
    padding-right: 2px;
    padding-left: 2px;
}

.userDivs div {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.userDivs div button {
    height: 20px;
}

</style>