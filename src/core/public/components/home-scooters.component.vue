<script>
export default {
  name: 'home-scooters'
}
</script>

<template>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
    <div class="mb-3 font-bold text-3xl">
      <span class="text-900">FastScooter, </span>
      <span class="text-orange-500">{{ $t('options-title') }}</span>
    </div>

    <div class="grid">
      <div class="col-12 md:col-4 mb-4 px-5">
        <span class="p-4 mb-3 inline-block surface-card" style="border-radius: 10px">
          <div class="i-container">
            <i class="fa-solid fa-bicycle" style="color: #f97316"></i>
          </div>
        </span>
        <div class="text-900 text-orange-500 text-xl mb-3 font-medium">{{ $t('option1') }}</div>
        <span class="text-700 line-height-3">{{ $t('option1-content') }}</span>
      </div>

      <div class="col-12 md:col-4 mb-4 px-5">
        <span class="p-4 mb-3 inline-block surface-card" style="border-radius: 10px">
          <div class="i-container">
            <i class="fa-solid fa-person-biking-mountain" style="color: #f97316"></i>
          </div>
        </span>
        <div class="text-900 text-orange-500 text-xl mb-3 font-medium">{{ $t('option2') }}</div>
        <span class="text-700 line-height-3">{{ $t('option2-content') }} </span>
      </div>

      <div class="col-12 md:col-4 md:mb-4 mb-0 px-3">
        <span class="p-4 mb-3 inline-block surface-card" style="border-radius: 10px">
          <div class="i-container">
            <i class="fa-solid fa-person-biking" style="color: #f97316"></i>
          </div>
        </span>
        <div class="text-900 text-orange-500 text-xl mb-3 font-medium">{{ $t('option3') }}</div>
        <span class="text-700 line-height-3">{{ $t('option3-content') }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>