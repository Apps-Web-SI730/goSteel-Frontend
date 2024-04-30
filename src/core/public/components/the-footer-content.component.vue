<script>
export default {
  name: 'the-footer-content.component.vue'
}
</script>

<template>
  <div
    class="
     the-footer-content
     bg-orange-50 p-3
     flex justify-content-between
    "
  >
    <div class="font-bold mr-8 text-medium">&copy; 2024 FastScooter, C.O. Go Steel</div>

    <a class="icons">
      <i class="icon pi pi-twitter"></i>
      <i class="icon pi pi-instagram"></i>
      <i class="icon pi pi-facebook"></i>
    </a>
  </div>
</template>

<style scoped>
.icon {
  margin-right: 1.5rem;
}
</style>