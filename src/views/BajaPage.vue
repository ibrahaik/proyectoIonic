<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar class="border-b border-[#afadad]">
        <ion-buttons slot="start">
          <ion-button @click="goBack">
            <ion-icon :icon="arrowBack" class="text-2xl"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title class="boton">Darse de baja</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="mt-8">
        <div class="mb-6">
          <ion-label class="text-[#726e6e] text-sm">Email/Usuario</ion-label>
          <div class="relative">
            <ion-input
              v-model="email"
              class="input-field"
              readonly
            ></ion-input>
          </div>
        </div>

        <div class="mb-6">
          <ion-label class="text-[#726e6e] text-sm">Contraseña</ion-label>
          <ion-input
            v-model="password"
            type="password"
            class="input-field"
          ></ion-input>
        </div>

        <div class="logo-container">
          <img src="/boyling.png" alt="Logo" class="logo" />
        </div>
      </div>
    </ion-content>

    <ion-footer class="ion-no-border">
      <ion-toolbar>
        <div class="p-4">
          <ion-button
            expand="block"
            class="h-14 font-bold text-black"
            :style="{
              '--background': '#ffff00',
              '--background-hover': '#ffff00',
              '--background-activated': '#e6e600',
              '--border-radius': '8px',
              '--color': 'black',
              '--border-radius': '34px',
            }"
            @click="confirmDeactivation"
          >
            CONFIRMAR BAJA
          </ion-button>
        </div>
      </ion-toolbar>
    </ion-footer>

    <!-- Modal de confirmación -->
    <ion-modal :is-open="showModal" @did-dismiss="closeModal">
      <ion-content class="ion-padding">
        <div class="alert-container shake">
          <h2>Si aceptas, se borrará tu perfil y serás redireccionado</h2>
          <ion-button expand="block" color="danger" @click="deactivateAccount">Sí</ion-button>
          <ion-button expand="block" color="medium" @click="closeModal">No</ion-button>
        </div>
      </ion-content>
    </ion-modal>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonLabel,
  IonButton,
  IonButtons,
  IonIcon,
  IonFooter,
  IonModal
} from '@ionic/vue';
import { arrowBack } from 'ionicons/icons';

const router = useRouter();

const email = ref('ibrahimhaik12@gmail.com');
const password = ref('');
const showModal = ref(false);

const confirmDeactivation = () => {
  if (!password.value) {
    alert('Por favor, introduce tu contraseña para confirmar');
    return;
  }

  showModal.value = true;
};

const deactivateAccount = () => {
  console.log('Deactivating account for:', email.value);

  router.push('/start');
};

const closeModal = () => {
  showModal.value = false;
};

const goBack = () => {
  router.back(); 
};
</script>

<style scoped>
ion-input {
  --padding-start: 0;
  font-size: 16px;
}

ion-toolbar {
  --background: white;
}

ion-content {
  --background: white;
}

ion-label {
  font-size: 14px;
}

.boton {
  color: black;
}

.input-field {
  --background: #f4f4f4;
  --border-radius: 10px;
  --padding-start: 15px;
  --inner-padding-end: 15px;
  font-size: 14px;
  --border-color: #afadad;
}

.input-field ion-input {
  color: #2b2929;
}

.logo-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.logo {
  width: 150px;
  height: auto;
}

.alert-container {
  text-align: center;
}

.shake {
  animation: shake 0.5s ease-in-out 3;
}

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  50% { transform: translateX(10px); }
  75% { transform: translateX(-10px); }
  100% { transform: translateX(0); }
}
</style>
