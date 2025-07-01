<script setup>
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';
</script>

<template>
  <div>
    <main-header />
    <router-view />
    <main-footer />
  </div>
</template>

<style>
/* layout styles */
</style>
