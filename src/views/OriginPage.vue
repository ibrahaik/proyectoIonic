<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Origen</ion-title>
        <ion-buttons slot="end">
          <ion-button class="cancel-button">Cancelar</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="search-container">
        <ion-searchbar 
          placeholder="Buscar ciudad o país" 
          :debounce="500"
          v-model="searchQuery"
          class="custom-searchbar"
        ></ion-searchbar>
        
        <div class="direct-flights-option">
          <ion-checkbox v-model="directFlightsOnly"></ion-checkbox>
          <ion-label>Solo vuelos directos</ion-label>
        </div>
      </div>

      <ion-list class="airport-list">
        <ion-list-header class="recent-searches-header">
          ANTES BUSCASTE...
        </ion-list-header>
        
        <ion-item class="airport-item" button @click="selectAirport('LCG')">
          <div>
            <h2>A Coruña</h2>
            <p>España</p>
          </div>
          <div slot="end" class="airport-code">LCG</div>
        </ion-item>

        <ion-list-header class="letter-header">
          A
        </ion-list-header>
        
        <ion-item class="airport-item" button @click="selectAirport('LCG')">
          <div>
            <h2>A Coruña</h2>
            <p>España</p>
          </div>
          <div slot="end" class="airport-code">LCG</div>
        </ion-item>
        
        <ion-item class="airport-item" button @click="selectAirport('AGA')">
          <div>
            <h2>Agadir</h2>
            <p>Marruecos</p>
          </div>
          <div slot="end" class="airport-code">AGA</div>
        </ion-item>
        
        <ion-item class="airport-item" button @click="selectAirport('ALC')">
          <div>
            <h2>Alicante</h2>
            <p>España</p>
          </div>
          <div slot="end" class="airport-code">ALC</div>
        </ion-item>
        
        <ion-item class="airport-item" button @click="selectAirport('ALM')">
          <div>
            <h2>Almería</h2>
            <p>España</p>
          </div>
          <div slot="end" class="airport-code">ALM</div>
        </ion-item>
        
        <ion-item class="airport-item" button @click="selectAirport('AMT')">
          <div>
            <h2>Ámsterdam</h2>
            <p>España</p>
          </div>
          <div slot="end" class="airport-code">AMT</div>
        </ion-item>
        
        <ion-item class="airport-item" button @click="selectAirport('AGL')">
          <div>
            <h2>Argel</h2>
            <p>España</p>
          </div>
          <div slot="end" class="airport-code">AGL</div>
        </ion-item>
        
        <ion-item class="airport-item" button @click="selectAirport('AST')">
          <div>
            <h2>Asturias (Oviedo)</h2>
            <p>España</p>
          </div>
          <div slot="end" class="airport-code">AST</div>
        </ion-item>
        
        <ion-item class="airport-item" button @click="selectAirport('ATN')">
          <div>
            <h2>Atenas</h2>
            <p>España</p>
          </div>
          <div slot="end" class="airport-code">ATN</div>
        </ion-item>
        
        <ion-list-header class="letter-header">
          B
        </ion-list-header>
        
        <ion-item class="airport-item" button @click="selectAirport('BJL')">
          <div>
            <h2>Banjul</h2>
            <p>Gambia</p>
          </div>
          <div slot="end" class="airport-code">BJL</div>
        </ion-item>
        
        <ion-item class="airport-item" button @click="selectAirport('BCN')">
          <div>
            <h2>Barcelona</h2>
            <p>España</p>
          </div>
          <div slot="end" class="airport-code">BCN</div>
        </ion-item>
        
        <ion-item class="airport-item" button @click="selectAirport('BSL')">
          <div>
            <h2>Basilea</h2>
            <p>Suiza</p>
          </div>
          <div slot="end" class="airport-code">BSL</div>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonButton, IonButtons, IonBackButton, IonSearchbar,
  IonList, IonItem, IonListHeader, IonLabel, IonCheckbox
} from '@ionic/vue';

export default defineComponent({
  name: 'OriginSelectionView',
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
    IonButton, IonButtons, IonBackButton, IonSearchbar,
    IonList, IonItem, IonListHeader, IonLabel, IonCheckbox
  },
  setup() {
    const searchQuery = ref('');
    const directFlightsOnly = ref(false);
    
    const selectAirport = (code: string) => {
      console.log(`Selected airport: ${code}`);
      // Here you would typically navigate back or emit an event
    };
    
    return {
      searchQuery,
      directFlightsOnly,
      selectAirport
    };
  }
});
</script>

<style scoped>
ion-toolbar {
  --background: white;
}

.cancel-button {
  color: #777;
  font-weight: normal;
}

.search-container {
  padding: 10px 16px;
}

.custom-searchbar {
  --background: #f5f5f5;
  --border-radius: 24px;
  --box-shadow: none;
  --placeholder-color: #777;
  margin-bottom: 10px;
}

.direct-flights-option {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.airport-list {
  margin: 0;
  padding: 0;
}

.recent-searches-header, .letter-header {
  background-color: #c4c4c4;
  color: #000;
  font-weight: bold;
  padding: 8px 16px;
  margin: 0;
}

.airport-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --inner-padding-end: 0;
  border-bottom: 1px solid #e0e0e0;
}

.airport-item h2 {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
}

.airport-item p {
  margin: 4px 0 0;
  font-size: 14px;
  color: #777;
}

.airport-code {
  color: #777;
  font-size: 16px;
  font-weight: 500;
}

ion-content {
  --background: white;
}

ion-checkbox {
  --size: 20px;
  --border-radius: 4px;
  --border-color: #c4c4c4;
  --border-color-checked: #c4c4c4;
  --background-checked: #c4c4c4;
  --checkmark-color: white;
}
</style>