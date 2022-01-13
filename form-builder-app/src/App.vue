<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import AppNavbarVue from './AppNavbar.vue';
// defineProps<{ msg: string }>() // vite setup api typescript 的 props 這樣定義
</script>

<template>
<div class="d-flex flex-column h-100">
  <div class="flex-shrink-1">
    <AppNavbarVue />
  </div>
  <div class="flex-grow-1" style="min-height: 0;">
    <router-view></router-view>
  </div>
</div>

</template>

<style>
</style>
