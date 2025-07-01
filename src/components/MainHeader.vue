<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><router-link :class="{ actif: route.name==='home' }" to="/">Accueil</router-link></li>
        <li><router-link :class="{ actif: route.name==='projects' }" to="/projects">Mes projets</router-link></li>
        <li><router-link :class="{ actif: route.name==='contact' }" to="/contact">Me contacter</router-link></li>
      </ul>
    </nav>
  </header>
</template>
