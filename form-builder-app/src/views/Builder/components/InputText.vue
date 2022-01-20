<template>
  <div>
    this is a Text input 
  </div>
</template>

<script setup lang="ts">
import {defineExpose} from 'vue'
const test  = ()=> console.log('text input test function')

// script setup 裡面的宣告預設不會 expose
defineExpose({test})


</script>

<style scoped>

</style>