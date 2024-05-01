<script>
export default {
  name: 'the-header-content',
};
</script>

<template>
  <pv-toolbar class="bg-orange-50">
    <template #start>
<!--      <img src="" alt="Company Logo" class="logo" />-->
      <span class="brand-text">FastScooter</span>
    </template>

    <template #center>
      <p class="menu-options">
        <span>Home</span> | <span>About</span> | <span>Contact</span>
<!--    | <span><router-link to="/search">Search</router-link></span>-->
      </p>
    </template>

    <template #end>
      <p>
        <a href="/login"><pv-button class="login-button">Login</pv-button></a>
        <a href="/sign-up"><pv-button class="signup-button">Sign up</pv-button></a>
      </p>
    </template>
  </pv-toolbar>
</template>

<style scoped>

</style>