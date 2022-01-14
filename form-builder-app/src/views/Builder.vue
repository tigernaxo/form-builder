<template>
	<div class="row align-items-start h-100 g-0">
    <div class="col-2 h-100 bg-primary">
      <div class="container"></div>
        <div draggable="true" 
        @dragstart="dragstartHandler($event)"
        >
          One of three columns
          </div>
    </div>
    <div class="col-8 h-100">
      <!-- <div class="container" style="overflow: auto; max-height: 100%; background: black;"> -->
      <div class="container" style="overflow: auto; height: 100%; background: black;">
        <div id="test" droppable="true" 
        @drop="test($event, 'drop')" 
        @dragover.prevent="dragoverHandler($event)"
        @dragleave="monk($event, 'dragleave')" 
        @dragenter.prevent 
        style="background: white"> One of three columns </div>
      </div>
    </div>
    <div class="col-2 h-100 bg-success">
      One of three columns
    </div>
  </div>

</template>

<script setup lang="ts">
// To change that behavior so that an element becomes a drop zone or is droppable, 
// the element must have both ondragover (en-US) and ondrop (en-US) event handler attributes. 
// https://stackoverflow.com/questions/63063312/why-doesnt-the-drop-event-work-for-me-in-vue
// In order to make the div a drop target, the div's dragenter and dragover events must be canceled. 

// todo:
// clonNode
// record source element information
// node proccessing(copy, moving... etc) must be done by self
function test(e: DragEvent, str: string){
  console.log(str,e.target, e.dataTransfer?.items,e)
}
function dragstartHandler(e: DragEvent){
  let el = <HTMLElement>e.target;
  e.dataTransfer?.setData("text/plain", el.id);
  e.dataTransfer!.effectAllowed = "copy";

}
function dragoverHandler(e: DragEvent){
  e.dataTransfer!.dropEffect = "copy"
  console.log(e.dataTransfer?.dropEffect)
}
function monk(e: DragEvent, str: string){
}
</script>

<style scoped>
#test{
  width: 210mm;
  height: 297mm;
}
</style>