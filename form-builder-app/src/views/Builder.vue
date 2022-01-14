<template>
	<div class="row align-items-start h-100 g-0">
    <div class="col-2 h-100 bg-primary">
      <div class="container"></div>
        <div draggable="true" 
        >
          One of three columns
          </div>
    </div>
    <div class="col-8 h-100">
      <!-- <div class="container" style="overflow: auto; max-height: 100%; background: black;"> -->
      <div class="container" style="overflow: auto; height: 100%; background: black;">
        <div id="test" droppable="true" 
        @drop="test($event, 'drop')" 
        @dragover="test($event, 'dropover')"
        @dragleave="test($event, 'dragleave')" 
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
function test(e: DragEvent, str: string){
  console.log(str,e.target, e)
}
</script>

<style scoped>
#test{
  width: 210mm;
  height: 297mm;
}
</style>