<template>
  <div class="justify-content-center flex justify-center align-items-center h-screen">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">

      <div class="text-center mb-5">
        <div class="text-900 text-3xl font-medium mb-3">{{ $t('loginpage-welcome') }}</div>
        <span class="text-600 font-medium line-height-3">{{ $t('loginpage-message2') }}</span>
        <a class="font-medium no-underline ml-2 text-orange-500 cursor-pointer" href="/signup">{{ $t('login') }}</a>
      </div>

      <div>
        <label for="username" class="block text-900 font-medium mb-2">{{ $t('loginpage-name') }}</label>
        <pv-input-text id="username" type="text" class="w-full mb-3" v-model="username" />

        <label for="email" class="block text-900 font-medium mb-2">{{ $t('loginpage-email') }}</label>
        <pv-input-text id="email" type="text" class="w-full mb-3" v-model="email" />

        <label for="password" class="block text-900 font-medium mb-2">{{ $t('loginpage-password') }}</label>
        <pv-input-text id="password" type="password" class="w-full mb-3" v-model="password" />

        <label for="confirmPassword" class="block text-900 font-medium mb-2">{{ $t('loginpage-repeatpassword') }}</label>
        <pv-input-text id="confirmPassword" type="password" class="w-full mb-3" v-model="confirmPassword" />

        <div class="flex align-items-center justify-content-between mb-6">
          <a class="font-medium no-underline ml-2 text-orange-500 text-right cursor-pointer">{{ $t('signup-seepassword') }}</a>
        </div>

        <pv-button
          :label="$t('register')"
          icon="pi pi-user"
          class="w-full bg-orange-400 border-orange-200"
          @click="create()"
        ></pv-button>
      </div>

    </div>
  </div>
</template>

<script>
import { UserApiService } from '@/core/fast-scooter/services/user-api.service.js';

export default {
  name: 'user-sign-up-form',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      imgUrl:'',
      date:'',
      cellphone:'',
      userApiService: new UserApiService()
    };
  },
  methods: {
    async create() {
      if (!this.validateForm()) return;

      const user = {
        username: this.username,
        email: this.email,
        password: this.password,
        cellphone:"9392323",
        date:'2024-05-10',
        imgUrl:'https://i.imgur.com/krhyFim.png'
      };

      try {
        const response = await this.userApiService.create(user);
        if (response.status === 201) {
          alert('User created');
          this.$router.push('/home-login'); // Cambié 'users' por '/home'
        }
      } catch (error) {
        console.error('Error creating user:', error);
        alert('Error creating user');
      }
    },

    validateForm() {
      if (!this.username || !this.email || !this.password || !this.confirmPassword) {
        alert('Please fill in all fields');
        return false;
      }
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match');
        return false;
      }
      return true;
    }
  }
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
