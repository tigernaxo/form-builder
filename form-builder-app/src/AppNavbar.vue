<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary"  style="--bs-bg-opacity: .8;">
    <div class="container-fluid">
      <a class="navbar-brand"  to="/" href="#">EZ Form</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(menu, idx) in menus" :key="idx">
            <router-link :to="menu.to">
              <a class="nav-link" href="#">{{ menu.title }}</a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const menus = [
  {to: '/admin', title: 'Admin'},
  {to: '/builder', title: 'Builder'},
  {to: '/builder2', title: 'Builder2'},
  {to: '/builder3', title: 'Builder3'},
  {to: '/about', title: 'About'},
  {to: '/user/1', title: 'User'},
]
</script>

<style scoped>

</style>