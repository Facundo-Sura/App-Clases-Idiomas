<template>
  <div class="app-layout">
    <SidebarStudent />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import SidebarStudent from '../../components/layout/SidebarStudent.vue'
</script>
