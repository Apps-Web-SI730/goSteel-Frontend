<script>
import HomeUs from '@/core/public/components/home-us.component.vue';
import HomeScooters from '@/core/public/components/home-scooters.component.vue';
import HomeGetStarted from '@/core/public/components/home-get-started.component.vue'
import HomeTeam from '@/core/public/components/home-team.component.vue'
import HomeContact from '@/core/public/components/home-contact.component.vue'
import FakeToolbar from '@/core/fast-scooter/components/fake-toolbar.vue'

export default {
  name: 'home-view.component',
  components: {
    FakeToolbar,


    HomeUs,
    HomeScooters,
    HomeGetStarted,
    HomeTeam,
    HomeContact,
  }
}
</script>

<template>
<fake-toolbar/>

  <div class="w-md justify-center mx-auto px-4">
    <home-us/>
    <home-scooters />
    <home-team />
    <home-get-started />
    <home-contact />
  </div>

</template>

<style scoped>
.w-md {
  max-width: 80rem;
}
</style>
