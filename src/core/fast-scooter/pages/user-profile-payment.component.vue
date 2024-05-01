<script>
export default {
  name: 'user-profile-payment.component',

  data() {
    return {
      PaymentData: {
        nombre: '',
        numero_tarjeta: '',
        nombre_tarjeta: '',
        correo: '',
        exp_year: '',
        mes_exp: '',
        cvv: '',
      },
    };
  },
}
</script>

<template>
  <div class="container">
    <form>
      <div class="row">
        <h1 class="title">Métodos de pago</h1>

        <div class="col">
          <div class="inputBox">
            <label for="nombre">Nombre completo :</label>
            <input
              v-model="PaymentData.nombre"
              type="text"
              id="nombre"
              placeholder="Example Name"
              required
            />
          </div>

          <div class="inputBox">
            <label for="card">Tarjetas que aceptamos :</label>
            <img src="" alt="" />
          </div>

          <div class="inputBox">
            <label for="numero_tarjeta">Número de tarjeta :</label>
            <input
              v-model="PaymentData.numero_tarjeta"
              type="text"
              id="numero_tarjeta"
              placeholder="1111-2222-3333-4444"
              required
            />
          </div>

          <div class="inputBox">
            <label for="nombre_tarjeta">Nombre de su tarjeta :</label>
            <input
              v-model="PaymentData.nombre_tarjeta"
              type="text"
              id="nombre_tarjeta"
              placeholder="Example card name"
              required
            />
          </div>
        </div>

        <div class="col">
          <div class="inputBox">
            <label for="email">Correo electrónico :</label>
            <input
              v-model="PaymentData.correo"
              type="email"
              id="correo"
              placeholder="example@example.com"
              required
            />
          </div>

          <div class="flex">
            <div class="inputBox">
              <label for="año_exp">Año de exp :</label>
              <input
                v-model="PaymentData.exp_year"
                type="text"
                id="año_exp"
                placeholder="2022"
                required
              />
            </div>
            <div class="inputBox">
              <label for="mes_exp">Mes de exp :</label>
              <input
                v-model="PaymentData.mes_exp"
                type="text"
                id="mes_exp"
                placeholder="05"
                required
              />
            </div>
          </div>

          <div class="inputBox" style="margin-top: 0">
            <label for="cvv">CVV :</label>
            <input
              v-model="PaymentData.cvv"
              type="text"
              id="cvv"
              placeholder="1234"
              required
            />
          </div>
        </div>
      </div>

      <button type="submit" class="submit-btn">Añadir método</button>
    </form>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  background-color: #f2f2f2;
  font-family: 'Montserrat', sans-serif;
}

.container form {
  max-width: 500px;
  background: #fff;
  border: 2px solid #d78477;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.container form .row {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.container form .row .col {
  flex: 1 1 50%;
}

.container form .row .col .inputBox {
  margin-bottom: 15px;
}

.container form .row .col .inputBox label {
  display: block;
  margin-bottom: 5px;
  font-weight: 700;
}

.container form .row .col .inputBox input {
  width: 100%;
  border: 1px solid #ccc;
  padding: 10px 15px;
  font-size: 15px;
}

.container form .row .col .inputBox input:focus {
  border: 1px solid #d78477;
}

.container form .row .col .inputBox img {
  height: 30px;
  margin-top: 5px;
  filter: drop-shadow(0 0 1px #000);
  transition: transform 0.2s ease-in-out;
}

.container form .row .col .inputBox img:hover {
  transform: scale(1.1);
}

.container form .row .col .inputBox img:active {
  transform: scale(0.9);
}

.container form .row .col .flex {
  display: flex;
  gap: 10px;
  margin-top: 30px;
}

.container form .submit-btn {
  width: 100%;
  padding: 12px;
  font-size: 17px;
  margin-top: 10px;
  background-color: #d78477;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out;
}

.container form .submit-btn:hover {
  background-color: #c47065;
}

.container form .submit-btn:active {
  background-color: #e49d8f;
}
</style>