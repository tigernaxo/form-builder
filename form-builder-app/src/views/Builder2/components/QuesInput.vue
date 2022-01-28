<template>
  <div ref="rootRef" class="d-inline-block" @click="abc($event)">
    {{config}}
  <input type="text" class="form-control" placeholder="placeholder" disabled>
  </div>
</template>

<script setup lang="ts">
import {onMounted,defineExpose, ref} from 'vue'
import { IQues, IQuesConfig } from './QuesCommon'

const props = defineProps({text: String, config: Object})
// import THIS from './QuesInput.vue'
// let rootRef = ref<InstanceType<typeof THIS>>()
let rootRef = ref<HTMLDivElement>()
onMounted(() => {
  if(rootRef.value && props.config){
    rootRef.value.style.position = "absolute"
    rootRef.value.style.top = (<IQuesConfig>props.config).style.top + 'px'
    rootRef.value.style.left = (<IQuesConfig>props.config).style.left + 'px'
  }
})
// let inputText = ref<InstanceType<typeof InputText>>()
// import { test, testGet } from './QuesCommon'
const test1  = ()=> console.log('text input test function')
function abc(e: MouseEvent){
  console.log(e)
}

// script setup 裡面的宣告預設不會 expose
defineExpose({ test1 })
</script>

<style scoped>

</style>