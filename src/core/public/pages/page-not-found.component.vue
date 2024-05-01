<script>
import TheHeaderContent from '@/core/public/components/the-header-content.component.vue'

export default {
  name: 'page-not-found.component',
  components: { TheHeaderContent }
}
</script>

<template>
  <the-header-content/>

  <div class="notfound-container">
    <div class="full-width-container">
      <img src="@/assets/images/various/error.gif" alt="" class="full-width-image" />
    </div>

    <div class="after-fw">
      <h1>{{ $t('NotFound') }}</h1>

      <p>
        {{ $t('NotFoundMessage') }}
      </p>

      <a href="/">
        <pv-button>{{ $t('NotFoundButton') }}</pv-button>
      </a>
    </div>
  </div>
</template>

<style scoped>
.notfound-container {
  margin-bottom: 10rem;
}

.full-width-container{
  text-align: center;
}

.after-fw {
  text-align: center;
}
</style>