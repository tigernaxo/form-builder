<template>
  <div>
    <div class="mb-3 p-2">
      <label for="a" class="form-label">{{ config.label }}</label>
      <input :type="type" class="form-control" id="a" :placeholder="placeholder">
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'
defineProps({
  type: String,
  placeholder: String
})

// 設定好的屬性要放哪裡？應該不是 prop 吧
let config = {
	label: null,
	position: [0,0,0,0]
  }

</script>

<style scoped>

</style>