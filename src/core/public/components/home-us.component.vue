<script>
export default {
  name: 'home-us',

  data() {
    return {
      images: [
        'https://placehold.co/500',
        'https://placehold.co/500',
        'https://placehold.co/500',
      ],
      currentImageIndex: 0,
    };
  },

  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    },
  },

  methods: {
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
  },

  mounted() {
    setInterval(() => {
      this.nextImage();
    }, 10000);
  },
}
</script>

<template>
  <div class="about-component">
    <div class="first-part">
      <div>
        <h1 class="font-semibold text-900"><span class="text-orange-500">Fast</span>Scooter</h1>
        <p>{{ $t('about-content') }}</p>
<!--        <div class="buttons"></div>-->
      </div>
    </div>

    <div class="second-part">
      <div class="carousel">
        <img :src="currentImage" alt="Imagen del carrusel" />

<!--        <button class="next-button" @click="nextImage">-->
<!--          <div class="i-container">-->
<!--            <i class="fa-solid fa-angle-right" style="color: #f97316"></i>-->
<!--          </div>-->
<!--        </button>-->
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-component {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 40% 60%;
}

.first-part {
  display: flex;
  align-items: center;
  padding: 20px;
}

.first-part div {
  margin-right: 20px;
}

.first-part h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.buttons button {
  margin-top: 10px;
}

.second-part {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  /*background-color: red;*/
}

.carousel {
  position: relative;
  max-width: 100%;
}

.carousel img {
  width: 100%;
  background-color: transparent;
}

/* .next-button {
 position: absolute;
 top: 50%;
 right: 0;
 border: none;
 background-color: transparent;
 transform: translateY(-50%);
 cursor: pointer;
}

.i-container {
 font-size: 30px;
} */
</style>