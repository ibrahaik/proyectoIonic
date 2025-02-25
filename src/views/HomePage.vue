<template>
  <ion-page>
    <ion-header style="background: transparent; box-shadow: none;">
      <ion-toolbar style="--background: transparent;">

        <ion-buttons slot="start">
          <ion-item lines="none" button @click="toggleCurrencyMenu" class="currency-trigger no-background">
            <ion-label>{{ selectedCurrency }}</ion-label>
            <ion-icon name="chevron-down"></ion-icon>
          </ion-item>
        </ion-buttons>

        <!-- Icono de login (se mantiene en el slot "end") -->
        <ion-buttons slot="end">
          <ion-button router-link="/profile" routerDirection="forward">
            <ion-icon :icon="personCircleOutline" class="custom-ionic"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <div class="background-slider">
        <div class="slide" :style="{ backgroundImage: `url(${currentImage})` }"></div>
      </div>

      <!-- Menú de monedas que se despliega hacia abajo -->
      <div v-if="showCurrencySelect" class="currency-menu">
        <ion-item button @click="selectCurrency('EUR')">EUR</ion-item>
        <ion-item button @click="selectCurrency('USD')">USD</ion-item>
        <ion-item button @click="selectCurrency('GBP')">GBP</ion-item>
      </div>

      <!-- Resto del contenido -->
      <div id="container">
        <div class="inselectedCurrencyput-container">
          <ion-item lines="full">
            <ion-input placeholder="Origen"></ion-input>
          </ion-item>
          <ion-item lines="full">
            <ion-input placeholder="Destino"></ion-input>
          </ion-item>
        </div>
        <ion-button expand="block" class="submit-button" router>
          BUSCAR VUELO
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonToolbar, IonButtons, IonButton, IonIcon, IonItem, IonInput } from '@ionic/vue';
import { personCircleOutline } from 'ionicons/icons';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const selectedCurrency = ref('EUR');
const showCurrencySelect = ref(false);
const images = ['/coliseo.png', '/francia.png', 'templo.png'];
const currentImageIndex = ref(0);
const currentImage = ref(images[0]);


function toggleCurrencyMenu() {
  showCurrencySelect.value = !showCurrencySelect.value;
}

function selectCurrency(currency: string) {
  selectedCurrency.value = currency;
  showCurrencySelect.value = false; 
}

function goToLogin() {
  console.log("Navegando a /login...");
  router.push('/login').catch(err => console.error("Error en navegación:", err));
}

onMounted(() => {
  setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
    currentImage.value = images[currentImageIndex.value];
  }, 3000);
});
</script>

<style scoped>

.background-slider {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.slide {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out;
}

#container {
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 115%;
}

.submit-button {
  --background: #ba3535;
  --color: white;
  --border-radius: 8px;
  --padding-start: 20px;
  --font-size: 16px;
  --height: 50px;
  margin-top: 2%;
  opacity: 0.8;
}

.custom-ionic {
  font-size: 50px;
  color: black;
}

ion-content {
  --background: url('/coliseo.png') no-repeat center center/cover;
}

.input-container {
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid #cccccc; 
}

ion-item {
  --border-color: #cccccc;
  margin-bottom: 0;
}

ion-item ion-input {
  font-size: 16px;
}

ion-item:last-child {
  margin-bottom: 0;
}

.currency-menu {
  position: absolute;
  top: 50px; /* Ajusta según la posición del botón */
  left: 10px; /* Ajusta según la alineación */
  background: rgba(0, 0, 0, 0.6); /* Fondo semitransparente */
  border-radius: 8px;
  z-index: 1000; /* Asegura que se superponga */
  width: 90px;
  padding: 5px 0;
}

.currency-menu ion-item {
  --inner-border-width: 0;
  padding: 10px 10px;
  font-size: 12px;
  color: white;
  --background: transparent;
}

.currency-trigger.no-background {
  --background: transparent !important;
  margin-left: 20%;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 17px;
  font-size: 15px;
  right: 12%;
}

.inselectedCurrencyput-container {
  background-color: rgba(255, 255, 255, 0.8); /* Fondo semitransparente */
  padding: 2px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  --inner-border-width: 0;
  --border-width: 0;
}


</style>
