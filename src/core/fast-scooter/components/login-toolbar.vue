<template>
  <pv-toolbar class="bg-orange-50">
    <template #start>
      <!-- <img src="" alt="Company Logo" class="logo" /> -->
      <span class="brand-text">FastScooter</span>
    </template>

    <template #end>
      <p class="menu-options">
        <router-link to="/home-login">Home</router-link>
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

const handleLogout = () => {
  // Mostrar el mensaje de cierre de sesión
  loading.value = true;

  // Simular el cierre de sesión con un retraso de 2 segundos
  setTimeout(() => {
    // Ocultar el mensaje de cierre de sesión
    loading.value = false;

    // Redirigir a la ruta /home
    router.push('/home');
  }, 2000);
};
</script>

<style scoped>
  .menu-options {
  display: flex;
  justify-content: flex-end;
}

.menu-options a,
.logout-link {
  text-decoration: none;
  color: #333;
  margin-left: 1rem;
  cursor: pointer;
}

.menu-options a:hover,
.logout-link:hover {
  text-decoration: underline;
}

/* Ajustar el espaciado entre los elementos /
.menu-options router-link + router-link::before,
.menu-options router-link + a::before {
  content: "|";
  margin-left: 1rem;
}

/ Estilo para el mensaje de cierre de sesión */
.logout-loading {
  margin-left: 1rem;
  color: #666;
}
</style>
