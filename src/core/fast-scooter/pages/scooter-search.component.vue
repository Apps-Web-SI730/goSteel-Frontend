<script setup>
import Card from 'primevue/card';
import Button from "primevue/button";
import Image from 'primevue/image';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import FakeToolbar from '@/core/fast-scooter/components/login-toolbar.vue'
const layout = ref('grid');
</script>

<script>
import { ref, onMounted } from 'vue';

import UserHeader from '@/core/fast-scooter/components/user-header.component.vue';
import ScootersApiService from "@/core/fast-scooter/services/scooters-api.service.js";
import FavoritesApiService from "@/core/fast-scooter/services/favorites.api.service.js";
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
      const response = await ScootersApiService.getAllScooters();
      this.scooters = response.data;
      this.$forceUpdate();
      console.log(this.scooters);
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

    async addToFavorites(scooter) {
      try {
        const response = await FavoritesApiService.addFavorite(scooter);
        console.log("Scooter added to favorites: ", response.data);
      } catch (error) {
        console.log(error);
      }
    }
  },
}
</script>

<template>
  <fake-toolbar />


  <div class="body-container">
    <h1>Todos los scooters</h1>

    <!--    <div class="container-cards-scooter">-->
    <!--      <Card class="card-scooter" v-for="scooter in scooters" :key="scooter.id" style="width: 25rem; overflow: hidden">-->
    <!--        <template #header>-->
    <!--          <Image alt="user header" :src="scooter.image" width="400"  height="400"  preview/>-->
    <!--        </template>-->
    <!--        <template #title>{{ scooter.brand }}</template>-->
    <!--        <template #subtitle>{{ scooter.description }}</template>-->
    <!--        <template #content>-->
    <!--        </template>-->
    <!--        <template #footer>-->
    <!--          <div class="button-router-link">-->
    <!--            <router-link :to="`/search-scooter/${scooter.id}`">-->
    <!--              <Button label="Save" class="button-view-scooter" />-->
    <!--            </router-link>-->
    <!--          </div>-->
    <!--        </template>-->
    <!--      </Card>-->
    <!--    </div>-->

    <div class="card">
      <DataView :value="scooters" :layout="layout">
        <template #header>
          <div class="flex justify-content-end">
            <DataViewLayoutOptions v-model="layout" />
          </div>
        </template>

        <template #list="slotProps">
          <div class="grid grid-nogutter">
            <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
              <div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3"
                   :class="{ 'border-top-1 surface-border': index !== 0 }">
                <div class="md:w-10rem relative">
                  <img class="" :src="item.image" :alt="item.name" />
                  <!--                <Tag :value="item.inventoryStatus" :severity="getSeverity(item)" class="absolute" style="left: 4px; top: 4px"></Tag>-->
                </div>
                <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
                  <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                    <div>
                      <span class="font-medium text-secondary text-sm">{{ item.brand }}</span>
                      <div class="text-lg font-medium text-900 mt-2">{{ item.brand }}</div>
                    </div>
                    <div class="surface-100 p-1" style="border-radius: 30px">
                      <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2"
                           style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                        <span class="text-900 font-medium text-sm">5</span>
                        <i class="pi pi-star-fill text-yellow-500"></i>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-column md:align-items-end gap-5">
                    <span class="text-xl font-semibold text-900">${{ item.price }}</span>
                    <div class="flex flex-row-reverse md:flex-row gap-2">
                      <Button icon="pi pi-heart" outlined></Button>
                      <router-link :to="`/search-scooter/${item.id}`">
                        <Button icon="pi pi-shopping-cart" label="Buy Now"
                                :disabled="item.inventoryStatus === 'OUTOFSTOCK'"
                                class="flex-auto md:flex-initial white-space-nowrap"></Button>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>

        <template #grid="slotProps">
          <div class="grid grid-nogutter">
            <div v-for="(item, index) in slotProps.items" :key="index" class="col-12 sm:col-6 md:col-4 xl:col-6 p-2">
              <div class="p-4 border-1 surface-border surface-card border-round flex flex-column">
                <div class="surface-50 flex justify-content-center border-round p-3">
                  <div class="relative mx-auto">
                    <Image class="border-round w-full" :src="item.image" :alt="item.name" width="400" height="400"
                           preview />
                    <!--                  <Tag :value="item.inventoryStatus" :severity="getSeverity(item)" class="absolute" style="left: 4px; top: 4px"></Tag>-->
                  </div>
                </div>
                <div class="pt-4">
                  <div class="flex flex-row justify-content-between align-items-start gap-2">
                    <div>
                      <span class="font-medium text-secondary text-sm">{{ item.brand }}</span>
                      <div class="text-lg font-medium text-900 mt-1">{{ item.brand }}</div>
                    </div>
                    <div class="surface-100 p-1" style="border-radius: 30px">
                      <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2"
                           style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                        <span class="text-900 font-medium text-sm"> 5 </span>
                        <i class="pi pi-star-fill text-yellow-500"></i>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-column gap-4 mt-4">
                    <span class="text-2xl font-semibold text-900">${{ item.price }}</span>
                    <div class="flex gap-2">
                      <router-link :to="`/search-scooter/${item.id}`">
                        <Button icon="pi pi-shopping-cart" label="Buy Now"
                                :disabled="item.inventoryStatus === 'OUTOFSTOCK'"
                                class="flex-auto white-space-nowrap"></Button>
                      </router-link>
                      <Button icon="pi pi-heart" outlined @click="addToFavorites(item)"></Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </DataView>
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

.body-container {
  max-width: 1500px;
  //background-color: red;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.container-cards-scooter {
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.card-scooter {
  margin: 0 25px;
  margin-bottom: 20px;
}

.button-view-scooter {
  width: 100%;
}

img {
  width: 400px;
  height: 400px;
}

router-link {
  width: 300px;
}

</style>