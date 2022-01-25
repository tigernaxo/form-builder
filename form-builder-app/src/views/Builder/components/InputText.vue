<template>
  <div class="d-inline-block">
    {{text}}
  </div>
</template>

<script setup lang="ts">
import {defineExpose} from 'vue'
import { test, testGet } from './QuesCommon'
const test1  = ()=> console.log('text input test function')

// script setup 裡面的宣告預設不會 expose
defineExpose({test ,test1, testGet })
defineProps({text: String})
</script>

<style scoped>

</style>