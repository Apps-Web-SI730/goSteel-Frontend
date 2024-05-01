<script>
import UserHeader from '@/core/fast-scooter/components/user-header.component.vue';

export default {
  name: 'scooter-add',
  components: { UserHeader },

  setup() {
    // return {
    //   title,
    //   size,
    //   amount,
    //   description,
    //   city,
    //   district,
    //   address,
    //   submitForm,
    // };
  },
}
</script>

<script setup>
// import HeaderComponent from '../components/HeaderComponent.vue';
import { ref } from 'vue';
// import { bicycleService } from '../services/bicycle.lyw.service';
import { useToast } from 'primevue/usetoast';
// import router from '../router';

const name = ref('');
const description = ref('');
const price = ref('');
const size = ref('');
const model = ref('');
const image = ref('');
// const userid = localStorage.getItem('id');
const city = ref('');
const district = ref('');
const address = ref('');

//const bicycleApiService = new bicycleService();
const toast = useToast();

async function submitForm() {
  if (name.value == '') {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Es necesario ingresar el nombre de la bicicleta',
      life: 3000,
    });
    return false;
  } else if (description.value == '') {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Es necesario ingresar la descripción de la bicicleta',
      life: 3000,
    });
    return false;
  } else if (price.value == '') {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Es necesario ingresar el precio de la bicicleta',
      life: 3000,
    });
    return false;
  } else if (size.value == '') {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Es necesario ingresar el tamaño de la bicicleta',
      life: 3000,
    });
    return false;
  }

  try {
    // const bicycle = {
    //   name: name.value,
    //   description: description.value,
    //   price: Number(price.value),
    //   model: model.value,
    //   size: size.value,
    //   image: image.value,
    //   userid: Number(userid),
    // };

    // await bicycleService.create(bicycle);

    name.value = '';
    description.value = '';
    price.value = '';
    model.value = '';
    size.value = '';
    image.value = '';
    city.value = '';
    district.value = '';
    address.value = '';

    await successfullRequest();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    // await router.push('/search');
  } catch (error) {
    console.error('Error while submitting the form:', error);
  }
}

async function successfullRequest() {
  toast.add({
    severity: 'success',
    summary: 'Exitos ༼ つ ◕_◕ ༽つ',
    detail: 'La bicicleta se ha agregado correctamente',
    life: 3000,
  });
}
</script>

<template>
  <user-header />

  <div class="card-primary mt-5">
    <pv-tab-view :scrollable="true">
      <pv-tab-panel header="Información General">
        <div class="flex flex-column gap-5 mt-3 mb-5 align-items-center height">
          <div class="card">
            <div class="flex flex-column gap-2">
              <label for="title" class="font-bold">Título</label>

              <pv-input-text id="title" v-model="name" aria-describedby="username-help" />

              <small id="username-help">Ingrese el título de su publicación.</small>
            </div>
          </div>

          <div class="flex flex-wrap gap-3 card">
            <div class="flex align-items-center">
              <RadioButton v-model="size" inputId="size1" name="bike" value="small" />
              <label for="size1" class="ml-2">Small</label>
            </div>
            <div class="flex align-items-center">
              <RadioButton v-model="size" inputId="size2" name="bike" value="medium" />
              <label for="size2" class="ml-2">Medium</label>
            </div>
            <div class="flex align-items-center">
              <RadioButton v-model="size" inputId="size3" name="bike" value="large" />
              <label for="size3" class="ml-2">Large</label>
            </div>
            <div class="flex align-items-center">
              <RadioButton v-model="size" inputId="size4" name="bike" value="xlarge" />
              <label for="size4" class="ml-2">X-Large</label>
            </div>
          </div>

          <div class="card flex flex-column">
            <label for="currency-per" class="font-bold block mb-2">Monto</label>
            <InputNumber v-model="price" inputId="currency-per" prefix="S/ " />
          </div>

          <div class="card">
            <label for="description" class="font-bold block mb-2">Descripción</label>
            <Textarea inputId="description" v-model="description" rows="5" cols="30" />
          </div>
        </div>
      </pv-tab-panel>

      <pv-tab-panel header="Ubicación">
        <div class="flex flex-column align-items-center gap-3 mt-3 mb-5 height">
          <div class="p-inputgroup flex-1 card maxH">
            <span class="p-inputgroup-addon">
              <i class="pi pi-map"></i>
            </span>
            <pv-input-text placeholder="Ciudad" v-model="city" />
          </div>

          <div class="p-inputgroup flex-1 card maxH">
            <span class="p-inputgroup-addon">
              <i class="pi pi-map-marker"></i>
            </span>
            <pv-input-text placeholder="Distrito" v-model="district" />
          </div>

          <div class="p-inputgroup flex-1 card maxH">
            <span class="p-inputgroup-addon">
              <i class="pi pi-map-marker"></i>
            </span>
            <pv-input-text placeholder="Dirección" v-model="address" />
          </div>
        </div>
      </pv-tab-panel>

      <pv-tab-panel header="Fotos">
        <div class="cardUpload mt-3 mb-5 height">
          <pv-file-upload name="demo[]" :multiple="true" accept="image/*" :maxFileSize="1000000">
            <template #header="{ chooseCallback, clearCallback, files }">
              <div class="flex flex-wrap justify-content-between align-items-center flex-1 gap-2">
                <div class="flex gap-2">

                  <pv-button @click="chooseCallback()" icon="pi pi-images" rounded outlined></pv-button>

                  <pv-button
                    @click="clearCallback()"
                    icon="pi pi-times"
                    rounded
                    outlined
                    severity="danger"
                    :disabled="!files || files.length === 0"
                  />
                </div>

                <ProgressBar
                  :value="totalSizePercent"
                  :showValue="false"
                  :class="[
                    'md:w-20rem h-1rem w-full md:ml-auto',
                    { 'exceeded-progress-bar': totalSizePercent > 100 },
                  ]"
                ><span class="white-space-nowrap">{{ totalSize }}B / 1Mb</span></ProgressBar
                >
              </div>
            </template>

            <template #empty>
              <p class="font-bold flex flex-column align-items-center">
                Arrastra aquí tus imagenes.
              </p>
            </template>
          </pv-file-upload>

          <div class="mt-5">
            <InputText placeholder="Enlace de la Imagen" v-model="image" />
          </div>

          <pv-button label="Submit" icon="pi pi-check" class="mt-4" @click="submitForm()" />
        </div>
      </pv-tab-panel>
    </pv-tab-view>
  </div>
</template>

<style scoped>
.card-primary {
  display: block;
  margin: 0 auto;
  width: 80%;
}

.card {
  width: 270px;
}

.maxH {
  max-height: 50px;
}

.height {
  height: 65vh;
}
</style>