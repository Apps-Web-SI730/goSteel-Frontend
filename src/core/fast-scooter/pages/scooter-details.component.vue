<script setup>
import BookingsApiService from "@/core/fast-scooter/services/bookings-api.service.js";
import UserHeader from '@/core/fast-scooter/components/user-header.component.vue';
import Message from 'primevue/message';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import InputIcon from 'primevue/inputicon';
import Button from "primevue/button";
import Rating from 'primevue/rating';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import { ref } from "vue";
const value2 = ref(1)
const icondisplay = ref();
const templatedisplay = ref();
const loading = ref(false);
const showSuccessMessage = ref(false);
const value = ref(4);
''
const load = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    showSuccessMessage.value = true;
    setTimeout(() => {
      router.push('/payment');
    }, 2000); // Cambiado a 3000 para que el redireccionamiento sea después de 3 segundos
  }, 1000); // Mensaje mostrado después de 1 segundo
};

</script>

import BookingsApiService from "@/core/fast-scooter/services/bookings-api.service.js";
import UserHeader from '@/core/fast-scooter/components/user-header.component.vue';
import Message from 'primevue/message';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import InputIcon from 'primevue/inputicon';
import Button from "primevue/button";
import Rating from 'primevue/rating';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import { ref } from "vue";
const value2 = ref(1)
const icondisplay = ref();
const templatedisplay = ref();
const loading = ref(false);
const showSuccessMessage = ref(false);
const value = ref(4);
''
const load = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    showSuccessMessage.value = true;
    setTimeout(() => {
      router.push('/payment');
    }, 2000); // Cambiado a 3000 para que el redireccionamiento sea después de 3 segundos
  }, 1000); // Mensaje mostrado después de 1 segundo
};





<template>
  <user-header />
  <div class="container-details">
    <div class="container-scooters-details">
      <div class="images-scooters">
        <img class="image-scooter" :src="scooter.image" alt="">
      </div>
      <div class="text-scooter-details">
        <h1>{{ scooter.brand }}</h1>
        <h2>Marca: Xiaomi</h2>
        <h2>Estado: Perfecto</h2>
        <div class="text-scooter-details-time">
          <h2>Tiempo:</h2>
          <div class="card flex flex-wrap gap-3 p-fluid">
            <div class="flex-auto">
              <InputNumber class="input-time-container" v-model="value2" inputId="minmax-buttons" mode="decimal" showButtons :min="0" :max="100" />
            </div>
          </div>
          <h2>hr</h2>
        </div>
        <div class="text-scooter-details-take-time">
          <h2>Recoger: </h2>
          <div class="card flex flex-wrap gap-3 p-fluid">
            <div class="flex-auto">
              <Calendar class="input-take-time" v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay" />
            </div>
            <div class="flex-auto">
              <Calendar class="input-take-time" v-model="templatedisplay" showIcon iconDisplay="input" timeOnly inputId="templatedisplay">
                <template #inputicon="{ clickCallback }">
                  <InputIcon class="pi pi-clock cursor-pointer" @click="clickCallback" />
                </template>
              </Calendar>

            </div>
          </div>
        </div>
        <h2>Entrega:</h2>

        <Button type="button" label="prueba" @click="loadBooking"/>
        <Message severity="success" v-if="showSuccessMessage">Redirigiendo a la plataforma de Pago...</Message>
        <Rating v-model="value" readonly :cancel="false" />
        <i class="pi pi-comment" style="font-size: 2.5rem"></i>
      </div>

      <div class="footer-price">
        <TabView>
          <TabPanel header="Precio Total">
            <h2>PEN 75.00</h2>
          </TabPanel>
        </TabView>
        <Button type="button" label="Rentar ahora"  :loading="loading" @click="load" class="button-buy" />
      </div>


    </div>



  </div>

</template>

<style scoped>
.container-details{
  //background-color: aqua;
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container-scooters-details{
  display: flex;
}
.text-scooter-details{
  margin-left: 20px;

}

.text-scooter-details-time{
  display: flex;
  align-items: center;
}
.input-time-container{
  width: 100px;
}

.image-scooter{
  width: 500px;
  height: 500px;
}

.text-scooter-details-take-time{
  display: flex;
  align-items: center;
}
.input-take-time{
  width: 150px;
}

.footer-price{
  align-content: end;
}

.button-buy{
  width: 200px;
}

</style>
