<script setup>
import Button from "primevue/button";
import DataView from "primevue/dataview";
import UserHeader from '@/core/fast-scooter/components/user-header.component.vue';
import FakeToolbar from '@/core/fast-scooter/components/fake-toolbar.vue'

</script>

<script>
import FavoritesApiService from "@/core/fast-scooter/services/favorites.api.service.js";

export default {
  data:()=>({
  }),
  async mounted() {
    try {
      const response = await FavoritesApiService.getAllFavorites();
      this.favorites = response.data;
      this.$forceUpdate();
      console.log(this.favorites);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async deleteFavorites(favorites){
      try{
        const response = await FavoritesApiService.deleteFavorite(favorites)
        console.log("Scooter removed from favorites", response.data)
        // this.favorites = this.favorites.filter(favorite => favorite.id !== favoriteId);
      }catch (error){
        console.error(error);
      }
    }
  }
}
</script>

<template>

  <fake-toolbar/>
  <h1>Scooters Favoritos</h1>
  <DataView :value="favorites" :layout="layout">

    <template #list="slotProps">
      <div class="grid grid-nogutter">
        <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
          <div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3" :class="{ 'border-top-1 surface-border': index !== 0 }">
            <div class="md:w-10rem relative">
              <img class="" :src="item.image" :alt="item.name"  width="400" height="400"/>
              <!--                <Tag :value="item.inventoryStatus" :severity="getSeverity(item)" class="absolute" style="left: 4px; top: 4px"></Tag>-->
            </div>
            <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
              <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                <div>
                  <span class="font-medium text-secondary text-sm">{{ item.brand }}</span>
                  <div class="text-lg font-medium text-900 mt-2">{{ item.brand }}</div>
                </div>
                <div class="surface-100 p-1" style="border-radius: 30px">
                  <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                    <span class="text-900 font-medium text-sm">5</span>
                    <i class="pi pi-star-fill text-yellow-500"></i>
                  </div>
                </div>
              </div>
              <div class="flex flex-column md:align-items-end gap-5">
                <span class="text-xl font-semibold text-900">${{ item.price }}</span>
                <div class="flex flex-row-reverse md:flex-row gap-2">
                  <Button icon="pi pi-heart-fill" outlined @click="deleteFavorites(item.id)"></Button>
                  <router-link :to="`/search-scooter/${item.id}`">
                    <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial white-space-nowrap"></Button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </DataView>




</template>

<style scoped>

</style>


