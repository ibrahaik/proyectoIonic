<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="header-toolbar">
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Selecciona tu vuelo</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="flight-header">
        <div class="left-section">
          <div class="flight-type">
            <ion-icon :icon="airplane" class="plane-icon"></ion-icon>
            <span class="type-text">IDA</span>
          </div>
        </div>
        <div class="center-section">
          <h2>BARCELONA - ESTAMBUL</h2>
          <p>Ida y vuelta - 1 adulto</p>
        </div>
        <ion-button fill="clear" class="edit-button" @click="toggleMenu">
          <img src="/editar.png" alt="Editar" class="edit-icon"/>
        </ion-button>
      </div>

      <div v-if="isMenuOpen" class="menu-overlay active" @click="closeMenu">
        <div class="menu-content" @click.stop>
          <h2>EDITAR BÚSQUEDA</h2>
          <div class="menuDestinos">
            
            <router-link to="/origin" class="no-underline">
            <div class="input-wrapper">
            <label class="input-label">
            <span class="bold-italic">BCN</span>
            <span class="small-text">Barcelona</span>
          </label>           
         </div>
        </router-link>

        <router-link to="/destination" class="no-underline">
          <div class="input-wrapper">
              <label class="input-label">
                <span class="bold-italic">IST</span>
                <span class="small-text">Estambul</span>
              </label>
              </div>   
            </router-link>
          </div>

          <div class="menuFechas">
            <div class="input-wrapper">
              <ion-item lines="none">
                <ion-label position="stacked">Salida</ion-label>
                <ion-input v-model="departureDate" type="date"></ion-input>
              </ion-item>
            </div>
            <div class="input-wrapper">
              <ion-item lines="none">
                <ion-label position="stacked">Regreso</ion-label>
                <ion-input v-model="returnDate" type="date"></ion-input>
              </ion-item>
            </div>
          </div>

          <div>
            <div class="input-wrapper">
              <ion-input placeholder="1 adulto"></ion-input>
            </div>
          </div>

          <ion-button @click="closeMenu" class="menuBoton">Aplicar cambios</ion-button>
        </div>
      </div>

      <div class="date-selection">
        <ion-segment v-model="selectedDate" mode="md">
          <ion-segment-button value="25" class="date-option">
            <div class="date-content">
              <span class="day">Lun 25 nov</span>
              <span class="price">350 €</span>
            </div>
          </ion-segment-button>
          <ion-segment-button value="26" class="date-option">
            <div class="date-content">
              <span class="day">Mar 26 nov</span>
              <span class="price">95 €</span>
            </div>
          </ion-segment-button>
          <ion-segment-button value="27" class="date-option" disabled>
            <div class="date-content">
              <span class="day">Mié 27 nov</span>
              <span class="price no-flights">Sin vuelos</span>
            </div>
          </ion-segment-button>
        </ion-segment>
      </div>

      <div v-if="selectedDate === '25'">
        <div class="flight-card">
          <div class="flight-times">
            <div class="time">13:15</div>
            <div class="time">18:35</div>
          </div>
          <div class="flight-route">
            <div class="airport">BCN</div>
            <div class="flight-type-label">Directo</div>
            <div class="airport">IST</div>
          </div>
          <div class="flight-number">boyling VY6450</div>
          <router-link to="/vuelta" class="no-underline" >
          <ion-button expand="block" class="price-button" >
            350 €
          </ion-button>
          </router-link>
        </div>
        <div class="flight-card">
          <div class="flight-times">
            <div class="time">14:00</div>
            <div class="time">19:35</div>
          </div>
          <div class="flight-route">
            <div class="airport">BCN</div>
            <div class="flight-type-label">1 escala</div>
            <div class="airport">IST</div>
          </div>
          <div class="flight-number">boyling VY7990</div>
          <router-link to="/vuelta" class="no-underline">
          <ion-button expand="block" class="price-button">
            117 €
          </ion-button>
          </router-link>
        </div>
        <div class="flight-card">
          <div class="flight-times">
            <div class="time">9:00</div>
            <div class="time">20:35</div>
          </div>
          <div class="flight-route">
            <div class="airport">BCN</div>
            <div class="flight-type-label">2 escalas</div>
            <div class="airport">IST</div>
          </div>
          <div class="flight-number">boyling VY6150</div>
          <router-link to="/vuelta" class="no-underline">
          <ion-button expand="block" class="price-button">
            100 €
          </ion-button>
          </router-link>
        </div>
        <div class="flight-card">
          <div class="flight-times">
            <div class="time">6:00</div>
            <div class="time">11:35</div>
          </div>
          <div class="flight-route">
            <div class="airport">BCN</div>
            <div class="flight-type-label">Directo</div>
            <div class="airport">IST</div>
          </div>
          <div class="flight-number">boyling VY7530</div>
          <router-link to="/vuelta" class="no-underline">
          <ion-button expand="block" class="price-button">
            203 €
          </ion-button>
          </router-link>
        </div>
      </div>

      <div v-else-if="selectedDate === '26'">
        <!-- Vista correspondiente a IdaPage2 (Mar 26 nov) -->
        <div class="flight-card">
          <div class="flight-times">
            <div class="time">20:45</div>
            <div class="time">2:00</div>
          </div>
          <div class="flight-route">
            <div class="airport">BCN</div>
            <div class="flight-type-label">1 escala</div>
            <div class="airport">IST</div>
          </div>
          <div class="flight-number">boyling VY39150</div>
          <router-link to="/vuelta" class="no-underline">
          <ion-button expand="block" class="price-button">
            95 €
          </ion-button>
          </router-link>
        </div>
      </div>
      
      <!-- No se muestra contenido para selectedDate "27" ya que está deshabilitado -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonItem,
  IonInput
} from '@ionic/vue';
import { airplane } from 'ionicons/icons';

export default defineComponent({
  name: 'FlightSelectionView',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonButtons,
    IonBackButton,
    IonIcon,
    IonSegment,
    IonSegmentButton,
    IonItem,
    IonInput
  },
  setup() {
    const selectedDate = ref('26');
    const isMenuOpen = ref(false);
    const departureDate = ref('');
    const returnDate = ref('');

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
    };

    return {
      selectedDate,
      airplane,
      isMenuOpen,
      toggleMenu,
      closeMenu,
      departureDate,
      returnDate
    };
  }
});
</script>

<style scoped>

ion-content {
  --background: url(/fondoVuelo.png) no-repeat center center fixed;
  background-size: cover;
  background-color: #5EABD2;
  overflow-y: auto;
}

@media screen and (min-width: 768px) {
  ion-content {
    --background: url(/vueloancho.png) no-repeat center center fixed;
  }
}


router-link {
  text-decoration: none;
}

router-link:focus, router-link:active {
  text-decoration: none;
}

.input-label {
      display: block;
     
    }
    .small-text {
      --display: block;
      color: #aaa;
      font-size: 12px;
      margin-left: 10px;
    }
    .bold-italic {
      font-weight: bold;
      font-style: italic;
      color: black;
    }

.prince-link {
  text-decoration: none;
}

.input-wrapper {
  display: block;
  border: 1px solid black;
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 8px;
}

.menuDestinos {
  display: flex;
  flex-direction: column; /* BCN e IST uno encima del otro */
  gap: 8px;
}

.menuFechas {
  display: flex;
  justify-content: space-between; /* MAR 26 NOV y SÁB 30 NOV uno al lado del otro */
  gap: 8px;
}

.menuFechas .input-wrapper {
  width: 48%; /* Para que los inputs ocupen un espacio proporcional */
}

.menuBoton {
  --background: yellow; /* Fondo amarillo */
  --color: black; /* Texto negro */
  --border-radius: 10px;
  padding: 12px 24px;
  margin-top: 16px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  width: 100%;
}

.menuBoton:hover {
  --background: #f7e600;
}

.header-toolbar {
  --background: #ffffff;
}

.flight-header {
  background: #238ed4;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.flight-type {
  display: flex;
  align-items: center;
  gap: 5px;
}

.plane-icon {
  font-size: 24px;
}

.type-text {
  font-size: 18px;
  font-weight: bold;
}

.center-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.center-section h2 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.center-section p {
  margin: 4px 0 0;
  font-size: 14px;
  color: black;
}

.edit-button {
  --padding-start: 8px;
  --padding-end: 8px;
}

.date-selection {
  padding: 16px;
}

ion-segment {
  background: transparent;
}

.date-option {
  --background: white;
  --background-checked: white;
  --border-radius: 8px;
  --border-color: #ddd;
  --border-style: solid;
  --border-width: 1px;
  --indicator-color: transparent;
  margin: 4px;
}

.date-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 8px;
}

.day {
  font-size: 10px;
}

.price {
  color: #0e7b09;
  font-weight: bold;
}

.no-flights {
  color: var(--ion-color-medium);
}

.flight-card {
  background: white;
  margin: 16px;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.flight-times {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  border-bottom: 2px solid black;
}

.flight-route {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.airport {
  font-size: 18px;
  font-weight: bold;
}

.flight-type-label {
  text-align: center;
  text-decoration: underline;
  margin-bottom: 4px;
  font-size: 12px;
  color: var(--ion-color-medium);
  margin-right: 8px;
}

.flight-number {
  text-align: center;
  margin-bottom: 16px;
  color: black;
  padding-bottom: 4px;
  font-size: 14px;
  font-weight: bold;
  border-bottom: 1px solid black;
}

.price-button {
  --background: white;
  --color: black;
  --border-radius: 24px;
  --border-color: #0f0f0f;
  --border-style: solid;
  --border-width: 1px;
  font-weight: bold;
  margin: 0;
}

.edit-icon {
  width: 24px;
  height: 24px;
}

/* Menu Styles */
.menu-overlay {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  transition: opacity 0.3s ease-in-out;
}

.menu-content {
  background: white;
  width: 100%;
  max-width: 600px;
  border-radius: 16px 16px 0 0;
  padding: 16px;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;
  max-height: 80vh;
  overflow-y:auto
}

.menu-overlay.active .menu-content {
  transform: translateY(0);
}

.menu-overlay.active {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

.no-underline {
  text-decoration: none !important;
}

</style>
