<template>
<h1>Examples of <code>DataTransfer</code>.{<code>types</code>, <code>items</code>} properties</h1>
	<ul>
		<li id="i1" @dragstart="dragstart_handler($event);" draggable="true">Drag Item 1 to the Drop Zone</li>
		<li id="i2" @dragstart="dragstart_handler($event);" draggable="true">Drag Item 2 to the Drop Zone</li>
	</ul>
	<div id="target" @drop="drop_handler($event);" @dragover="dragover_handler($event);">Drop Zone</div>
</template>

<script setup lang="ts">
function dragstart_handler(ev: DragEvent) {
	console.log("dragStart: target.id = " + (<HTMLElement>ev.target).id);
	// Add this element's id to the drag payload so the drop handler will
	// know which element to add to its tree
	ev.dataTransfer?.setData("text/plain", (<HTMLElement>ev.target).id);
	ev.dataTransfer!.effectAllowed = "move";
}

function drop_handler(ev: DragEvent) {
	console.log("drop: target.id = " + ev.target);
	ev.preventDefault();
	// Get the id of the target and add the moved element to the target's DOM
	var data = ev.dataTransfer?.getData("text");
	var items = ev.dataTransfer?.items
	console.log('data', data)
	console.log('items', items)
	if(data)
	{
		let el = document.getElementById(data)
		el && (<HTMLElement>ev.target)?.appendChild(el);
	}
	// Print each format type
	if (ev.dataTransfer?.types != null) {
		for (var i=0; i < ev.dataTransfer.types.length; i++) {
			console.log("... types[" + i + "] = " + ev.dataTransfer.types[i]);
		}
	}
	// Print each item's "kind" and "type"
	if (ev.dataTransfer?.items != null) {
		for (var i=0; i < ev.dataTransfer.items.length; i++) {
			console.log("... items[" + i + "].kind = " + ev.dataTransfer.items[i].kind + " ; type = " + ev.dataTransfer.items[i].type);
		}
	}
}

function dragover_handler(ev: DragEvent) {
 console.log("dragOver");
 ev.preventDefault();
 // Set the dropEffect to move
 ev.dataTransfer!.dropEffect="move"
}
</script>

<style scoped>

</style>