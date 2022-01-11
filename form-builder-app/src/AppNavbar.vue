<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand"  to="/" href="#">EZ Form</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/admin">
              <a class="nav-link" href="#">Admin</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/builder">
              <a class="nav-link" href="#">Builder</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">
              <a class="nav-link" href="#">About</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user/1">
              <a class="nav-link" href="#">User</a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">

import { ref } from 'vue'
const count = ref(0)

</script>

<style scoped>

</style>