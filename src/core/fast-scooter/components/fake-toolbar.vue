<template>
  <pv-toolbar class="bg-orange-50">
    <template #start>
      <!-- <img src="" alt="Company Logo" class="logo" /> -->
      <span class="brand-text">FastScooter</span>
    </template>

    <template #end>
      <p class="menu-options">
        <router-link to="/about">About</router-link>
        <router-link to="/support-client">Contact</router-link>
        <router-link to="/search-scooter">Reservation</router-link>
        <router-link to="/favorites">Favorites</router-link>
        <a @click="handleLogout" class="logout-link">Log Out</a>
        <span v-if="loading" class="logout-loading">(In process...)</span>
      </p>
    </template>
  </pv-toolbar>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const loading = ref(false);
</script>

<style scoped>
</style>
