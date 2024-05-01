<script>
import { ref, computed } from 'vue';

export default {
  name: 'home-contact',

  setup() {
    const name = ref('');
    const email = ref('');
    const message = ref('');
    const formSubmitted = ref(false);

    // Computed property that checks if any of the form fields are empty
    const formIncomplete = computed(() => {
      return !name.value || !email.value || !message.value;
    });

    function isValidEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    function submitForm() {
      if (formIncomplete.value) {
        console.log('Form incomplete!');
        return;
      } else if (!isValidEmail(email.value)) {
        console.log('Invalid email!');
        alert('Invalid email!');
        return;
      }

      console.log('Form submitted!');
      formSubmitted.value = true;
    }

    return {
      name,
      email,
      message,
      formIncomplete,
      formSubmitted,
      submitForm,
    };
  },
}
</script>

<template>
  <div class="text-center w-27rem mx-auto">
    <h2>{{$t('contact-us-title')}}</h2>

    <p>{{ $t('contact-us-sub-title') }}</p>

    <form class="m-3 flex-row" v-on:submit.prevent="submitForm" :class="{ 'form-complete': !formIncomplete }">
      <pv-input-text v-model="name" placeholder="Name" class="w-full" :class="formIncomplete ?'f-incomplete' : 'f-complete'" />

      <pv-input-text v-model="email" placeholder="Email" class="my-3 w-full" :class="formIncomplete ?'f-incomplete' : 'f-complete'" />

      <pv-textarea v-model="message" placeholder="Message" rows="5" class="mb-3 w-full" :class="formIncomplete ?'f-incomplete' : 'f-complete'" />

      <pv-button label="Send" type="submit" :class="formIncomplete ? 'bg-gradient-to-r from-red-500 to-red-700': 'bg-gradient-to-r from-green-500 to-blue-500 transition duration-500'" class="w-full"/>
    </form>
  </div>
</template>

<style scoped>
input[type="email"],
input[type="text"],
textarea {
  border-radius: 5px;
  padding: 0.5rem;
  transition: border-color 0.5s;
}

pv-button:focus {
  box-shadow: 0 0 5px rgba(245, 245, 245, 0);
}

.form-complete .f-complete {
  color: #E16F58;
}

/*
.bg-gradient-to-r.from-red-500.to-red-700 {
  background: linear-gradient(to right, #817E9F, #808080);
  border: none;
  color: #FFF;
}

.bg-gradient-to-r.from-green-500.to-blue-500 {
  background: linear-gradient(to right, #f97316, #E16F58);
  border: none;
  color: #FFF;
}

.f-incomplete:hover,.f-incomplete:focus {
  border-color: #817E9F !important;
  box-shadow: 0 0 5px #817E9F !important;
}

.f-complete:hover,.f-complete:focus {
  border-color: #E16F58 !important;
  box-shadow: 0 0 5px #E16F58 !important;
}
*/

</style>