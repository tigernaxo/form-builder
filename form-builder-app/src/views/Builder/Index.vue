<template>
	<div class="row g-0 area-root">
    <div class="col-2 container area-component">
      <div>
        <input-text ref="inputText" draggable="true" @dragstart="dragstartHandler($event)"></input-text>
      </div>
    </div>
    <div class="col-8 container area-edit">
      <div class="mx-auto my-auto" id="convas" droppable="true" 
        @drop="dropHandler($event)" 
        @dragover.prevent="dragoverHandler($event)"
        @dragleave="monk($event, 'dragleave')" 
        @dragenter.prevent 
      > 排版區 </div>
    </div>
    <div class="col-2 area-property container">
      元件編輯區
    </div>
  </div>

</template>

<script setup lang="ts">
import { throttle } from 'lodash'
import InputText from './components/InputText.vue'
import {ref} from 'vue'
// To change that behavior so that an element becomes a drop zone or is droppable, 
// the element must have both ondragover (en-US) and ondrop (en-US) event handler attributes. 
// https://stackoverflow.com/questions/63063312/why-doesnt-the-drop-event-work-for-me-in-vue
// In order to make the div a drop target, the div's dragenter and dragover events must be canceled. 

// todo:
// clonNode
// record source element information
// node proccessing(copy, moving... etc) must be done by self
let clonNode: Node 

// ref component 型別的方法
let inputText = ref<InstanceType<typeof InputText>>()

function test(e: DragEvent, str: string){
  console.log(str,e.target, e.dataTransfer?.items,e)
}
function dragstartHandler(e: DragEvent){
    clonNode = (<Node>e.target)?.cloneNode(true);
    let el = <HTMLElement>e.target;
    e.dataTransfer?.setData("text/plain", el.id);
    e.dataTransfer!.effectAllowed = "copy";
}

let dragoverHandler= throttle(function(e: DragEvent){
  e.dataTransfer!.dropEffect = "copy"
  console.log(e.dataTransfer?.dropEffect)
}, 150)

function dropHandler(e: DragEvent){
  inputText.value?.test()
  console.log('drop',  e.target)
  document.getElementById('convas')?.appendChild(clonNode);
}
function monk(e: DragEvent, str: string){
}
</script>

<style scoped>
#convas{
  width: 210mm;
  height: 297mm;
  background-color: white;
  position: relative;
}
.area-edit{
  overflow: auto;
  background-color: black;
}
.area-component{
  background-color: rgb(49, 34, 185);
  color:aliceblue;
}
.area-property{
  background-color: rgb(97, 36, 97);
  color:aliceblue;
}
 .area-root, .area-root > div {
  height: 100%;
}
</style>