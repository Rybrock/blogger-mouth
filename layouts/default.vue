<script setup>
import navbar from '/components/navigation/navbar.vue'
</script>
<template>
  <div>
    <navbar />

    <div>
      <!-- page content -->
      <slot />
    </div>
  </div>
</template>
