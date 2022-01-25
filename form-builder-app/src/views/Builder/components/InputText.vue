<template>
  <div>
    {{text}}
  </div>
</template>

<script setup lang="ts">
import {defineExpose} from 'vue'
const test  = ()=> console.log('text input test function')

// script setup 裡面的宣告預設不會 expose
defineExpose({test})
defineProps({text: String})


</script>

<style scoped>

</style>