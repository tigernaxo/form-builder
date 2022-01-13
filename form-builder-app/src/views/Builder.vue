<template>
	<div class="row align-items-start h-100 g-0">
    <div class="col-2 h-100 bg-primary">
      <div class="container"></div>
        One of three columns
    </div>
    <div class="col-8 h-100">
      <!-- <div class="container" style="overflow: auto; max-height: 100%; background: black;"> -->
      <div class="container" style="overflow: auto; height: 100%; background: black;">
        <div id="test" style="background: white"> One of three columns </div>
      </div>
    </div>
    <div class="col-2 h-100 bg-success">
      One of three columns
    </div>
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped>
#test{
  width: 15cm;
  height: 15cm;
}
</style>