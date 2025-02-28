<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Origen</ion-title>
        <ion-buttons slot="end">
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

        <div v-for="(letterCities, letter) in filteredCities" :key="letter">
          <ion-list-header class="letter-header">
            {{ letter }}
          </ion-list-header>

          <ion-item 
            v-for="city in letterCities" 
            :key="city.code" 
            class="airport-item" 
            button 
            @click="selectAirport(city.code)"
          >
            <div>
              <h2>{{ city.name }}</h2>
              <p>{{ city.country }}</p>
            </div>
            <div slot="end" class="airport-code">{{ city.code }}</div>
          </ion-item>
        </div>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonButton, IonButtons, IonBackButton, IonSearchbar,
  IonList, IonItem, IonListHeader, IonLabel, IonCheckbox
} from '@ionic/vue';
import router from '@/router';

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
    
    // Lista de ciudades y códigos
    const cities = ref([
      { name: 'A Coruña', country: 'España', code: 'LCG', directFlight: false },
      { name: 'Agadir', country: 'Marruecos', code: 'AGA', directFlight: true },
      { name: 'Alicante', country: 'España', code: 'ALC', directFlight: false },
      { name: 'Almería', country: 'España', code: 'ALM', directFlight: true },
      { name: 'Ámsterdam', country: 'España', code: 'AMT', directFlight: false },
      { name: 'Argel', country: 'España', code: 'AGL', directFlight: true },
      { name: 'Asturias (Oviedo)', country: 'España', code: 'AST', directFlight: false },
      { name: 'Atenas', country: 'España', code: 'ATN', directFlight: true },
      { name: 'Banjul', country: 'Gambia', code: 'BJL', directFlight: true },
      { name: 'Barcelona', country: 'España', code: 'BCN', directFlight: true },
      { name: 'Basilea', country: 'Suiza', code: 'BSL', directFlight: false },
      { name: 'Canadá', country: 'Canadá', code: 'YUL', directFlight: false },
      { name: 'Bogotá', country: 'Colombia', code: 'BOG', directFlight: true },
      { name: 'La Habana', country: 'Cuba', code: 'HAV', directFlight: false },
      { name: 'Copenhague', country: 'Dinamarca', code: 'CPH', directFlight: false },
      { name: 'Santo Domingo', country: 'República Dominicana', code: 'SDQ', directFlight: true },
      { name: 'Madrid', country: 'España', code: 'MAD', directFlight: false },
      { name: 'Buenos Aires', country: 'Argentina', code: 'EZE', directFlight: true }
    ]);
    
    // Filtrado de ciudades por nombre y vuelos directos
    const filteredCities = computed(() => {
      return cities.value
        .filter(city => 
          city.name.toLowerCase().includes(searchQuery.value.toLowerCase()) &&
          (!directFlightsOnly.value || city.directFlight)
        )
        .reduce((acc, city) => {
          const letter = city.name.charAt(0).toUpperCase();
          if (!acc[letter]) {
            acc[letter] = [];
          }
          acc[letter].push(city);
          return acc;
        }, {});
    });

    const selectAirport = (code: string) => {
      console.log(`Selected airport: ${code}`);
      router.push('/ida');
    };
    
    return {
      searchQuery,
      directFlightsOnly,
      filteredCities,
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
  padding: px 10px;
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
  font-size: 14px;
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
