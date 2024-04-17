import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useListTypeStore = defineStore('fiestaListType', () => {
    const type = ref('Following')

    const changeType = (t:string) => {
        type.value = t
    }

    const getType = () => {
        return type.value
    }

    return { getType, changeType }
    
})