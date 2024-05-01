<script>

export default {
  name: 'home-clients',
}
</script>

<template>
  <div class="testimonial">
    <div class="testimonialtop">
      <h1 class="font-semibold text-900 text-orange-500">{{ $t('get-started-slogan') }}</h1>
    </div>

    <div class="contenedortestimonial">
      <div class="testimonialtext">
        <div class="cuerpo-test">
          <p class="text-900 text-xl">
            {{ $t('get-started-content') }}
          </p>
          <div class="text-orange-500 font-bold mb-3">Powered by Discord</div>
        </div>
      </div>
      <div class="testimonialimg">
        <img
          src="https://cliply.co/wp-content/uploads/2021/08/372108630_DISCORD_LOGO_BLACK_400.gif"
          alt="Gif del logo de discord"
        />
      </div>
    </div>

    <a id="signup_button" href="/signup">
      <pv-button
      label="Join Now"
      icon="pi pi-external-link"
      class="font-bold px-5 py-3 p-button-raised bg-orange-400 border-orange-500 p-button-rounded white-space-nowrap"
      />
    </a>
  </div>
</template>

<style scoped>
.testimonial {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.testimonialtop {
  text-align: center;
  width: 100%;
  /*background-color: red;*/
}

.testimonialtop h1 {
  font-weight: bold;
  font-size: 40px;
}

.testimonialtop p {
  text-align: center;
  color: gray;
}

.contenedortestimonial {
  justify-content: space-between;
  align-items: center;
  position: relative;
  display: flex;
  /*background-color: blue;*/
  margin-left: 50px;
  margin-right: 50px;
}

.testimonialimg {
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.testimonialimg img {
  height: 250px;
}

.testimonialtext {
  margin-left: 50px;
  margin-right: 50px;
  justify-content: center;
  align-items: center;
}
</style>