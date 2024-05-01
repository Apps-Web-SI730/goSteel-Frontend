<script>
import UsersApiService from '@/core/fast-scooter/services/users.service.js';

export default {
  name: 'user-login-form',

  data: () => ({
    checked: false,
  }),

  methods: {
    async onSubmit() {
      if (!(await this.validForm())) return;

      if (!(await this.getUserId())) return;

      this.$router.push('/profile');
    },

    async validForm() {
      if (this.email == null || this.password == null) {
        await this.errorToast(this.$t('Complete todos los campos'));
        return false;
      }

      if (this.email == '' || this.password == '') {
        await this.errorToast(this.$t('Complete todos los campos'));
        return false;
      }

      if (this.email.indexOf('@') == -1) {
        await this.errorToast(this.$t('Ingrese un email válido'));
        return false;
      }

      if (this.password.length < 5) {
        await this.errorToast(this.$t('La contraseña debe tener al menos 5 caracteres'));
        return false;
      }

      return true;
    },

    async errorToast(message) {
      this.$toast.add({
        severity: 'error',
        summary: 'Error',
        detail: message,
        life: 3000,
      });
    },

    async getUserId() {
      const dataID = {
        email: this.email,
        password: this.password,
      };

      try {
        localStorage.setItem('id', await UsersApiService.login(dataID));
        return true;
      } catch (error) {
        await this.errorToast('Su email o contraseña son incorrectos');
        return false;
      }
    },

  },
}
</script>

<template>
  <div class="justify-content-center flex justify-center align-items-center h-screen">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">

      <div class="text-center mb-5">
<!--        <img src="@/assets/img/lywlogo.png" alt="Lead Your Way logo" height="50" class="mb-3" />-->

        <div class="text-900 text-3xl font-medium mb-3">{{ $t('loginpage-welcome') }}</div>

        <span class="text-600 font-medium line-height-3">{{ $t('loginpage-message') }}</span>

        <a class="font-medium no-underline ml-2 text-orange-500 cursor-pointer" href="/signup">{{
            $t('loginpage-register')
          }}</a>
      </div>

      <div>
        <label for="email1" class="block text-900 font-medium mb-2">{{
            $t('loginpage-email')
          }}</label>
        <pv-input-text id="email1" type="text" class="w-full mb-3" v-model="email" />

        <label for="password1" class="block text-900 font-medium mb-2">{{
            $t('loginpage-password')
          }}</label>
        <pv-input-text id="password1" type="password" class="w-full mb-3" v-model="password" />

        <div class="flex align-items-center justify-content-between mb-6">
          <div class="flex align-items-center">
            <pv-checkbox id="rememberme1" :binary="true" v-model="checked" class="mr-2"></pv-checkbox>

            <label for="rememberme1">{{ $t('loginpage-remember') }}</label>
          </div>

          <a class="font-medium no-underline ml-2 text-orange-500 text-right cursor-pointer">{{
              $t('loginpage-forgot')
            }}</a>
        </div>

        <pv-button
          :label="$t('login')"
          icon="pi pi-user"
          class="w-full bg-orange-400 border-orange-200"
          @click="onSubmit()"
        ></pv-button>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>