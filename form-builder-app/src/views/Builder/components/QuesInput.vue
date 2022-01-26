<template>
  <div class="d-inline-block" @click="abc($event)">
    {{config}}
  <input type="text" class="form-control" placeholder="placeholder" disabled>
  </div>
</template>

<script setup lang="ts">
import {defineExpose} from 'vue'
// import { test, testGet } from './QuesCommon'
import { GetConfig } from './QuesCommon'
const test1  = ()=> console.log('text input test function')
function abc(e: MouseEvent){
  console.log(e)
}

// script setup 裡面的宣告預設不會 expose
defineExpose({ GetConfig })
defineProps({text: String, config: Object})
</script>

<style scoped>

</style>