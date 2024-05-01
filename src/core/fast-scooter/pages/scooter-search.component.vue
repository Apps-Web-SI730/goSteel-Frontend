<script>
import { ref } from 'vue';

import UserHeader from '@/core/fast-scooter/components/user-header.component.vue';
// import CardBicycle from '../components/CardBicycle.vue';
// import { bicycleService } from '../services/bicycle.lyw.service';

export default {
  name: 'scooter-search',

  components: {
    UserHeader
  },

  data: () => ({
    cardsBicycle: [],
    searchText: '',
    dates: ref(),
    minDate: ref(new Date()),
    startDate: localStorage.getItem('startDate') || '',
    endDate: localStorage.getItem('endDate') || '',
  }),

  computed: {
    filteredCards() {
      const searchText = this.searchText.toLowerCase();
      return this.cardsBicycle.filter((card) => {
        return (
          card.name.toLowerCase().includes(searchText) ||
          card.content.toLowerCase().includes(searchText) ||
          card.price.toLowerCase().includes(searchText)
        );
      });
    },
  },

  async mounted() {
    try {
      // this.cardsBicycle = await bicycleService.getAll();
    } catch (error) {
      console.log(error);
    }
    this.minDate.setDate(this.minDate.getDate() + 1);
  },

  methods: {
    updateDates() {
      if (this.dates != null && this.dates[0] != null && this.dates[1] != null) {
        localStorage.setItem('startDate', this.dates[0].toISOString().split('T')[0]);
        localStorage.setItem('endDate', this.dates[1].toISOString().split('T')[0]);
        window.location.reload();
      }
    },
  },
}
</script>

<template>
  <user-header />

  <div class="search-container mb-5">
    <div class="search-wrapper">
      <div class="center">
        <pv-input-text v-model="searchText" placeholder="Buscar bicicleta" />
        <pv-button label="Buscar" class="search-button bg-orange-400" @click.native="updateDates()" />
      </div>

      <div class="container">
        <div class="leftside">
          <p v-if="startDate != ''"><b>Desde: </b>{{ startDate }}</p>
          <p v-else><b>Desde: </b><i>Aun no se escoge fecha</i></p>
        </div>

        <div class="rightside">
          <p v-if="endDate != ''"><b>Hasta: </b>{{ endDate }}</p>
          <p v-else><b>Hasta: </b><i>Aun no se escoge fecha</i></p>
        </div>
      </div>
    </div>

    <div class="card flex justify-content-center">
      <pv-calendar
        v-model="dates"
        selectionMode="range"
        :manualInput="false"
        inline
        :min-date="minDate"
      />
    </div>

    <div class="cards-wrapper">
<!--      <CardBicycle-->
<!--        v-for="cards in filteredCards"-->
<!--        :key="cards.id"-->
<!--        :name="cards.name"-->
<!--        :content="cards.description"-->
<!--        :price="cards.price"-->
<!--        :image="cards.image"-->
<!--        :average-rating="cards.averageRating"-->
<!--        :id="cards.id"-->
<!--      />-->
    </div>
  </div>
</template>

<style scoped>
.search-button {
  background-color: #e16f58;
  color: white;
  font-weight: bold;
  border: 2px solid #e16f58;
  border-radius: 5px;
  box-shadow: 0 0 5px #e16f58;
}
button.search-button:hover {
  background-color: #d65228;
  border: 2px solid #e16f58;
  border-radius: 5px;
  box-shadow: 0 0 5px #e16f58;
}
.search-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.cards-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
  gap: 2rem;
  max-width: 80%;
  margin: 0 auto;
  justify-content: center;
}

.container {
  display: flex;
  /* flex: wrap; */
  margin-top: 1em;
}

.rightside {
  width: 50%;
}

.leftside {
  width: 50%;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>