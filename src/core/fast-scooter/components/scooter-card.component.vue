<script>
import { ref } from 'vue';
// import { rentService } from '../services/rent.lyw.service';

// const value = ref(null);

export default {
  name: 'scooter-card.component',

  data: () => ({
    isAvailable: true,
    startDate: localStorage.getItem('startDate') || '',
    endDate: localStorage.getItem('endDate') || '',
    user: localStorage.getItem('id'),
  }),

  methods: {
    saveBike() {
      localStorage.setItem('bicycleId', this.id);
      // this.$router.push('/rent');
    },
  },

  setup() {
    const average = ref(3);
    return {
      average,
    };
  },

  props: {
    id: Number,
    name: String,
    content: String,
    price: String,
    image: String,
    averageRating: Number,
  },

  async mounted() {
    try {
      // const isAvailable = await rentService.bikeAvailable(this.id, this.startDate, this.endDate);
      // this.isAvailable = isAvailable;
    } catch (error) {
      // this.isAvailable = false;
    }
  },
}
</script>

<template>
  <div class="card-container">
    <pv-card class="bike-card">
      <template #header>
        <div class="image-container">
          <img class="header-image" :alt="name" :src="image" />
        </div>
      </template>

      <template #title>
        <h3 class="bike-name">{{ name }}</h3>
      </template>

      <template #content>
        <p class="bike-details">{{ content }}</p>
        <pv-rating :value="average" :cancel="false" readonly />
      </template>

      <template #footer>
        <div class="footer-content">
          <span class="price">S/. {{ price }}</span>

          <pv-button
            icon="pi pi-check"
            label="Rentar"
            class="rent-button"
            id="btn-rent"
            v-if="isAvailable"
            :disabled="!isAvailable || !user"
            @click="saveBike()"
          />

          <pv-button
            icon="pi pi-times"
            label="No Disponible"
            class="rent-button"
            id="btn-rent"
            v-else
            disabled
          />

        </div>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>

</style>