<script>
export default {
  name: 'user-header',

  data() {
    return {
      user: null,
    };
  },

  mounted() {
    this.user = localStorage.getItem('id');
  },
}
</script>

<template>
  <pv-toolbar>
    <template #start>
      <a href="/" class="text-lg font-bold mx-2 no-underline"> Fast Scooter </a>
    </template>

    <template #end>
      <a v-if="user" href="/"> <Button class="mr-2 text-bold">{{ $t('profile') }}</Button> </a>
      <a v-if="user" href="/"> <Button class="mr-2 text-bold">{{ $t('addScooter') }}</Button> </a>
      <a href="/">
        <pv-button class="mr-2 text-bold"> <i class="pi pi-search mr-2"></i> Search </pv-button>
      </a>
    </template>
  </pv-toolbar>
</template>

<style scoped>

</style>