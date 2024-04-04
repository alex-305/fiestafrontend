<template>
  <div>
    <RouterView/>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { GetUser } from '@/middleware/getuser';

onMounted(() => {
  
})

</script>

<style scoped>
</style>