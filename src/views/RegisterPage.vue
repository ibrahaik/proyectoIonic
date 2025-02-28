<template>
  <ion-page>
    <ion-content>
      <div class="form-container">
        <div class="contenedor">
          <ion-item class="custom-input">
            <ion-input @ionInput="e => name = e.target.value" placeholder="Nombre"></ion-input>
          </ion-item>

          <ion-item class="custom-input">
            <ion-input @ionInput="e => lastName = e.target.value" placeholder="Apellidos"></ion-input>
          </ion-item>

          <ion-item class="custom-input">
            <ion-input @ionInput="e => email = e.target.value" placeholder="Email"></ion-input>
          </ion-item>

          <ion-item class="custom-input">
            <ion-input @ionInput="e => password = e.target.value" type="password" placeholder="Contraseña"></ion-input>
          </ion-item>
        </div>

        <div class="terms-box">
          <ion-checkbox v-model="acceptedTerms"></ion-checkbox>
          <span class="terms-text">
            Acepto los términos y condiciones y la política de privacidad de Boyling.
          </span>
        </div>

        <ion-button expand="block" @click="goToHome" class="boton">
          DARME DE ALTA
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { alertController } from '@ionic/vue';

const router = useRouter();

const name = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const acceptedTerms = ref(false);

const showAlert = async () => {
  const alert = await alertController.create({
    header: 'Campos vacíos',
    message: 'Por favor, completa todos los campos antes de continuar.',
    buttons: ['OK']
  });
  await alert.present();
};

const goToHome = async () => {
  console.log("Valores actuales:", {
    name: name.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value
  });

  if (!name.value.trim() || !lastName.value.trim() || !email.value.trim() || !password.value.trim()) {
    await showAlert();
    return;
  }

  router.push('/home').then(() => {
    router.go(0); // Recarga la página
  }).catch(err => console.error("Error en navegación:", err));
};
</script>

<style scoped>

.terms-box {
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 2px;
  padding: 10px;
  width: 90%;
  margin: 10px auto;
  flex-direction: row-reverse;
}

.terms-text {
  margin-left: 10px;
  font-size: 14px;
  margin-right: 5px;
}

.custom-text {
  margin-top: 60%;
  margin-left: 40px;
  font-size: 14px;
}
.custom-input {
  --background: #f3f3f3; /* Gris claro */
  --border-radius: 10px;
  --padding-start: 15px;
  --inner-padding-end: 15px;
  font-size: 14px;
}

.custom-input ion-input {
  color: #2b2929; /* Letras en gris */
}

.login-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: white; /* O el color de tu app */
}

.logo-container {
  margin-bottom: 20px;
  text-align: center;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 15px; /* Ajusta según sea necesario */
}

.contenedor {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 80%;
}


.logo {
  width: 200px; /* Ajusta según tu diseño */
  height: auto;
}

.boton {
  --background: #FF0;
  margin-top: 10px;
  color: black;
  width: 70%;
  --border-radius: 20px;
}



</style>
