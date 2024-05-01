<script>
// import router from '../router';

export default {
  name: 'user-profile-update.component',

  async mounted() {
    // const id = localStorage.getItem('id');
    // await userService.getById(id).then((response) => {
    //   this.user = response;
    // });
  },
  data() {
    return {
      user: {},
      id: localStorage.getItem('id') || '',
    };
  },
  methods: {
    async updateProfile() {
      // const updatedUserData = {
      //   name: this.user.name,
      //   email: this.user.email,
      //   password: this.user.password,
      //   phone: this.user.phone,
      //   image: this.user.image,
      //   birthDate: this.user.birthDate,
      // };
      // await userService.updateProfile(this.id, updatedUserData);
      this.$toast.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Perfil actualizado con éxito',
        life: 3000,
      });
      await new Promise((resolve) => setTimeout(resolve, 3000));
      // await router.push('/profile');
    },
  },

}
</script>
<script setup>
import UserHeader from '@/core/fast-scooter/components/user-header.component.vue';
// import { userService } from '../services/user.service';
</script>

<template>
  <user-header />

  <div v-if="user">
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
      <div class="text-900 font-bold text-6xl mb-4 text-center">{{ user.name }}</div>
      <div class="w-full flex justify-content-center">
        <img class="max-w-18rem border-round-md" :src="user.image" alt="Profile Picture" />
      </div>
      <div class="text-700 text-xl mb-6 text-center line-height-3">
        {{ user.email }}
      </div>

      <div class="surface-section p-5">
        <div class="font-medium text-3xl text-900 mb-3">{{$t('updateData')}}</div>

        <div class="text-500 mb-5">{{ user.description }}</div>

        <form @submit.prevent="updateProfile" class="p-fluid">
          <div class="mb-3">
            <label for="name">Nombre:</label>
            <InputText id="name" v-model="user.name" />
          </div>
          <div class="mb-3">
            <label for="email">Email:</label>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{{ user.email }}</div>
          </div>
          <div class="mb-3">
            <label for="phone">Teléfono:</label>
            <InputText id="phone" v-model="user.phone" />
          </div>
          <div class="mb-3">
            <label for="image">Imagen (URL):</label>
            <InputText id="image" v-model="user.image" />
          </div>
          <div class="mb-3">
            <label for="birthDate">Fecha de nacimiento:</label>
            <InputText id="birthDate" v-model="user.birthDate" />
          </div>
          <Button type="submit" label="Guardar" />
        </form>
      </div>
    </div>
  </div>

  <div v-else>
    <div class="px-4 py-8 md:px-6 lg:px-8 bgColor">
      <div class="text-900 font-bold text-6xl mb-4 text-center">
        <img
          src="https://art.pixilart.com/ec39f926a73a5eb.gif"
          alt="Lead Your Way logo"
          class="mb-3 gifImg"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>