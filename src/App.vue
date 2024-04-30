<script>
import { defineComponent } from "vue";
import TheFooterContent from "@/core/public/components/the-footer-content.component.vue";

export default defineComponent({
  components: { TheFooterContent },
});
</script>

<template>
  <router-view/>

  <the-footer-content />
</template>

<style scoped>

</style>
