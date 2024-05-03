<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import FakeToolbar from '@/core/fast-scooter/components/login-toolbar.vue'

export default {
  name: 'support-client',
  components: { FakeToolbar },

  setup() {
    const router = useRouter();

    const subject = ref('');
    const message = ref('');
    const formSubmitted = ref(false);

    // Computed property that checks if any of the form fields are empty
    const formIncomplete = computed(() => {
      return !subject.value || !message.value;
    });

    // Computed property that checks the length of the subject
    const validSubject = computed(() => {
      return subject.value.length >= 20;
    });

    // Computed property that checks the length of the message
    const validMessage = computed(() => {
      return message.value.length >= 40;
    });

    function submitForm() {
      if (!validSubject.value) {
        alert('The subject must be at least 20 characters long.');
        return;
      }

      if (!validMessage.value) {
        alert('The message must be at least 40 characters long.');
        return;
      }

      console.log('Form submitted!');
      formSubmitted.value = true;
      alert('Message sent successfully');
      router.push('/home-login');
    }

    return {
      subject,
      message,
      formIncomplete,
      formSubmitted,
      submitForm,
    };
  },
}
</script>


<template>

  <fake-toolbar/>

  <div class="text-center w-27rem mx-auto">
    <h2>{{$t('support-us-title')}}</h2>

    <p>{{ $t('support-us-sub-title') }}</p>

    <form class="m-3 flex-row" v-on:submit.prevent="submitForm" :class="{ 'form-complete': !formIncomplete }">

      <pv-input-text v-model="subject" placeholder="Subject" class="my-3 w-full" :class="formIncomplete ?'f-incomplete' : 'f-complete'" />

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