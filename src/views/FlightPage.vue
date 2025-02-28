<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar class="bg-vueling-yellow">
        <ion-buttons slot="start">
          <ion-back-button default-href="/" text="" icon="chevron-back-outline" class="text-vueling-black"></ion-back-button>
        </ion-buttons>
        <ion-title class="font-bold text-vueling-black">PRÓXIMOS VUELOS</ion-title>
    
        <ion-buttons slot="end">
          <router-link to="/help">
          <ion-button class="text-vueling-black font-bold">AYUDA</ion-button>
        </router-link>

        </ion-buttons>
      </ion-toolbar>
      
      <div class="px-4 py-3 bg-vueling-white border-b border-gray-200">
        <div class="flex space-x-2 overflow-x-auto hide-scrollbar pb-2">
          <ion-chip 
            :class="activeFilter === 'todos' ? 'bg-vueling-yellow text-vueling-black font-semibold' : 'bg-vueling-white text-vueling-black border border-gray-300'"
            @click="setFilter('todos')"
          >
            <ion-icon :icon="funnel"></ion-icon>
            <ion-label>Todos</ion-label>
          </ion-chip>
          <ion-chip 
            :class="activeFilter === 'hoy' ? 'bg-vueling-yellow text-vueling-black font-semibold' : 'bg-vueling-white text-vueling-black border border-gray-300'"
            @click="setFilter('hoy')"
          >
            <ion-label>Hoy</ion-label>
          </ion-chip>
          <ion-chip 
            :class="activeFilter === 'manana' ? 'bg-vueling-yellow text-vueling-black font-semibold' : 'bg-vueling-white text-vueling-black border border-gray-300'"
            @click="setFilter('manana')"
          >
            <ion-label>Mañana</ion-label>
          </ion-chip>
          <ion-chip 
            :class="activeFilter === 'semana' ? 'bg-vueling-yellow text-vueling-black font-semibold' : 'bg-vueling-white text-vueling-black border border-gray-300'"
            @click="setFilter('semana')"
          >
            <ion-label>Esta semana</ion-label>
          </ion-chip>
          <ion-chip 
            :class="activeFilter === 'nacional' ? 'bg-vueling-yellow text-vueling-black font-semibold' : 'bg-vueling-white text-vueling-black border border-gray-300'"
            @click="setFilter('nacional')"
          >
            <ion-label>Nacional</ion-label>
          </ion-chip>
          <ion-chip 
            :class="activeFilter === 'internacional' ? 'bg-vueling-yellow text-vueling-black font-semibold' : 'bg-vueling-white text-vueling-black border border-gray-300'"
            @click="setFilter('internacional')"
          >
            <ion-label>Internacional</ion-label>
          </ion-chip>
        </div>
      </div>
    </ion-header>

    <ion-content class="ion-padding bg-vueling-white">
      <div class="mb-4">
        <ion-searchbar 
          placeholder="Buscar por destino o número de vuelo" 
          class="custom-searchbar"
          v-model="searchQuery"
        ></ion-searchbar>
      </div>
      
      <div class="flight-list-container">
        <div class="mb-2 flex justify-between items-center">
          <h2 class="text-lg font-bold text-vueling-black">{{ filteredFlights.length }} vuelos disponibles</h2>
          <ion-button fill="clear" class="text-vueling-black" @click="toggleSortOrder">
            <ion-icon slot="start" :icon="sortOrder === 'asc' ? arrowUp : arrowDown"></ion-icon>
            Ordenar
          </ion-button>
        </div>
        
        <div class="flight-list">
          <transition-group name="flight-item">
            <ion-card 
              v-for="flight in filteredFlights" 
              :key="flight.id" 
              class="flight-card mb-3"
              @click="selectFlight(flight)"
            >
              <div class="flight-card-content">
                <div class="flight-main-info">
                  <div class="flight-time-container">
                    <div class="flight-time">{{ flight.time }}</div>
                    <div class="flight-status" :class="getStatusClass(flight.status)">
                      {{ flight.status }}
                    </div>
                  </div>
                  
                  <div class="flight-destination">
                    <div class="text-xl font-bold text-vueling-black">{{ flight.destination }}</div>
                    <div class="text-sm text-gray-600">
                      <ion-icon :icon="airplane" class="rotate-90 mr-1"></ion-icon>
                      Vuelo {{ flight.flightNumber }}
                    </div>
                  </div>
                </div>
                
                <div class="flight-details" v-if="flight.expanded">
                  <div class="flight-details-grid">
                    <div class="detail-item">
                      <div class="detail-label">Terminal</div>
                      <div class="detail-value">{{ flight.terminal }}</div>
                    </div>
                    <div class="detail-item">
                      <div class="detail-label">Puerta</div>
                      <div class="detail-value">{{ flight.gate || 'Pendiente' }}</div>
                    </div>
                    <div class="detail-item">
                      <div class="detail-label">Duración</div>
                      <div class="detail-value">{{ flight.duration }}</div>
                    </div>
                    <div class="detail-item">
                      <div class="detail-label">Asientos</div>
                      <div class="detail-value">{{ flight.seats }}</div>
                    </div>
                  </div>
                  
                  <div class="flight-actions">
                    <ion-button expand="block" class="bg-vueling-yellow text-vueling-black font-bold">
                      DETALLES DEL VUELO
                    </ion-button>
                  </div>
                </div>
                
                <!-- Indicador de expansión -->
                <div class="expand-indicator">
                  <ion-icon :icon="flight.expanded ? chevronUp : chevronDown"></ion-icon>
                </div>
              </div>
            </ion-card>
          </transition-group>
        </div>
      </div>
    </ion-content>
    
    <!-- Banner de ofertas -->
    <ion-footer class="ion-no-border">
      <swiper 
        :modules="swiperModules" 
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        class="offers-swiper"
      >
        <swiper-slide>
          <div class="offer-banner bg-vueling-yellow">
            <div class="offer-content">
              <h3 class="offer-title">¡Entérate de nuestras ofertas!</h3>
              <p class="offer-description">Vuelos desde 19,99€ a destinos nacionales</p>
            </div>
            <ion-button fill="solid" class="bg-vueling-black text-vueling-white">
              VER OFERTAS
            </ion-button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="offer-banner bg-vueling-black">
            <div class="offer-content">
              <h3 class="offer-title text-vueling-yellow">¡Destinos de verano!</h3>
              <p class="offer-description text-vueling-white">Reserva ahora y ahorra hasta un 30%</p>
            </div>
            <ion-button fill="solid" class="bg-vueling-yellow text-vueling-black">
              RESERVAR
            </ion-button>
          </div>
        </swiper-slide>
      </swiper>
    </ion-footer>
  </ion-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton,
  IonButtons, IonButton, IonIcon, IonCard, IonChip, IonLabel,
  IonSearchbar, IonFooter
} from '@ionic/vue';
import { 
  airplane, chevronDown, chevronUp, funnel, arrowUp, arrowDown
} from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Módulos de Swiper
const swiperModules = [Autoplay, Pagination];

// Estado
const searchQuery = ref('');
const sortOrder = ref('asc');
const activeFilter = ref('todos');

// Datos de vuelos con información de tipo (nacional/internacional)
const flights = ref([
  { 
    id: 1, 
    flightNumber: '39754391', 
    destination: 'IBIZA', 
    time: '21:00', 
    status: 'En hora',
    terminal: 'T1',
    gate: 'B12',
    duration: '1h 15m',
    seats: '12 libres',
    expanded: false,
    type: 'nacional',
    date: new Date(new Date().setHours(21, 0, 0, 0))
  },
  { 
    id: 2, 
    flightNumber: '8975179', 
    destination: 'BARCELONA', 
    time: '23:30', 
    status: 'En hora',
    terminal: 'T2',
    gate: 'C05',
    duration: '1h 30m',
    seats: '8 libres',
    expanded: false,
    type: 'nacional',
    date: new Date(new Date().setHours(23, 30, 0, 0))
  },
  { 
    id: 3, 
    flightNumber: '39754391', 
    destination: 'PARÍS', 
    time: '00:00', 
    status: 'Retrasado',
    terminal: 'T4',
    gate: 'D22',
    duration: '2h 10m',
    seats: '3 libres',
    expanded: false,
    type: 'internacional',
    date: new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0)
  },
  { 
    id: 4, 
    flightNumber: '39754391', 
    destination: 'LUXEMBURGO', 
    time: '1:15', 
    status: 'En hora',
    terminal: 'T1',
    gate: 'A18',
    duration: '2h 30m',
    seats: '15 libres',
    expanded: false,
    type: 'internacional',
    date: new Date(new Date().setDate(new Date().getDate() + 1)).setHours(1, 15, 0, 0)
  },
  { 
    id: 5, 
    flightNumber: '39754391', 
    destination: 'ESTAMBUL', 
    time: '2:00', 
    status: 'En hora',
    terminal: 'T3',
    gate: 'E01',
    duration: '4h 05m',
    seats: '2 libres',
    expanded: false,
    type: 'internacional',
    date: new Date(new Date().setDate(new Date().getDate() + 1)).setHours(2, 0, 0, 0)
  },
  { 
    id: 6, 
    flightNumber: '39754391', 
    destination: 'TÁNGER', 
    time: '5:00', 
    status: 'Cancelado',
    terminal: 'T2',
    gate: '-',
    duration: '1h 45m',
    seats: '0 libres',
    expanded: false,
    type: 'internacional',
    date: new Date(new Date().setDate(new Date().getDate() + 2)).setHours(5, 0, 0, 0)
  },
  { 
    id: 7, 
    flightNumber: '39754391', 
    destination: 'MARRAKECH', 
    time: '6:30', 
    status: 'En hora',
    terminal: 'T1',
    gate: 'B08',
    duration: '2h 20m',
    seats: '5 libres',
    expanded: false,
    type: 'internacional',
    date: new Date(new Date().setDate(new Date().getDate() + 2)).setHours(6, 30, 0, 0)
  },
  { 
    id: 8, 
    flightNumber: '39754391', 
    destination: 'RABAT', 
    time: '8:00', 
    status: 'En hora',
    terminal: 'T2',
    gate: 'C12',
    duration: '2h 00m',
    seats: '7 libres',
    expanded: false,
    type: 'internacional',
    date: new Date(new Date().setDate(new Date().getDate() + 3)).setHours(8, 0, 0, 0)
  },
  { 
    id: 9, 
    flightNumber: '39754391', 
    destination: 'FES', 
    time: '10:00', 
    status: 'En hora',
    terminal: 'T1',
    gate: 'A22',
    duration: '1h 50m',
    seats: '10 libres',
    expanded: false,
    type: 'internacional',
    date: new Date(new Date().setDate(new Date().getDate() + 3)).setHours(10, 0, 0, 0)
  },
  { 
    id: 10, 
    flightNumber: '39754391', 
    destination: 'NADOR', 
    time: '11:30', 
    status: 'Retrasado',
    terminal: 'T2',
    gate: 'D15',
    duration: '2h 15m',
    seats: '4 libres',
    expanded: false,
    type: 'internacional',
    date: new Date(new Date().setDate(new Date().getDate() + 4)).setHours(11, 30, 0, 0)
  },
  { 
    id: 11, 
    flightNumber: '39754391', 
    destination: 'HOCEIMA', 
    time: '13:35', 
    status: 'En hora',
    terminal: 'T1',
    gate: 'B02',
    duration: '2h 05m',
    seats: '9 libres',
    expanded: false,
    type: 'internacional',
    date: new Date(new Date().setDate(new Date().getDate() + 4)).setHours(13, 35, 0, 0)
  },
  { 
    id: 12, 
    flightNumber: '39754391', 
    destination: 'TETOUAN', 
    time: '14:50', 
    status: 'En hora',
    terminal: 'T3',
    gate: 'E08',
    duration: '1h 55m',
    seats: '6 libres',
    expanded: false,
    type: 'internacional',
    date: new Date(new Date().setDate(new Date().getDate() + 5)).setHours(14, 50, 0, 0)
  },
  { 
    id: 13, 
    flightNumber: '39754391', 
    destination: 'OUARZAZATE', 
    time: '16:00', 
    status: 'En hora',
    terminal: 'T2',
    gate: 'C18',
    duration: '2h 30m',
    seats: '11 libres',
    expanded: false,
    type: 'internacional',
    date: new Date(new Date().setDate(new Date().getDate() + 5)).setHours(16, 0, 0, 0)
  },
  { 
    id: 14, 
    flightNumber: '39754391', 
    destination: 'SAHARA', 
    time: '19:30', 
    status: 'Retrasado',
    terminal: 'T1',
    gate: 'A10',
    duration: '3h 00m',
    seats: '2 libres',
    expanded: false,
    type: 'internacional',
    date: new Date(new Date().setDate(new Date().getDate() + 6)).setHours(19, 30, 0, 0)
  },
  { 
    id: 15, 
    flightNumber: '39754391', 
    destination: 'ALICANTE', 
    time: '20:00', 
    status: 'En hora',
    terminal: 'T4',
    gate: 'D05',
    duration: '1h 00m',
    seats: '14 libres',
    expanded: false,
    type: 'nacional',
    date: new Date(new Date().setDate(new Date().getDate() + 6)).setHours(20, 0, 0, 0)
  },
  { 
    id: 16, 
    flightNumber: '39754391', 
    destination: 'VALENCIA', 
    time: '20:15', 
    status: 'En hora',
    terminal: 'T2',
    gate: 'B15',
    duration: '1h 10m',
    seats: '8 libres',
    expanded: false,
    type: 'nacional',
    date: new Date(new Date().setDate(new Date().getDate() + 6)).setHours(20, 15, 0, 0)
  }
]);

// Establecer filtro activo
const setFilter = (filter) => {
  activeFilter.value = filter;
};

// Filtrado de vuelos
const filteredFlights = computed(() => {
  let result = [...flights.value];
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const endOfWeek = new Date(today);
  endOfWeek.setDate(today.getDate() + 7);
  
  // Aplicar filtro de categoría
  switch (activeFilter.value) {
    case 'hoy':
      result = result.filter(flight => {
        const flightDate = new Date(flight.date);
        return flightDate.toDateString() === today.toDateString();
      });
      break;
    case 'manana':
      result = result.filter(flight => {
        const flightDate = new Date(flight.date);
        return flightDate.toDateString() === tomorrow.toDateString();
      });
      break;
    case 'semana':
      result = result.filter(flight => {
        const flightDate = new Date(flight.date);
        return flightDate >= today && flightDate <= endOfWeek;
      });
      break;
    case 'nacional':
      result = result.filter(flight => flight.type === 'nacional');
      break;
    case 'internacional':
      result = result.filter(flight => flight.type === 'internacional');
      break;
  }
  
  // Filtrar por búsqueda
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(flight => 
      flight.destination.toLowerCase().includes(query) || 
      flight.flightNumber.includes(query)
    );
  }
  
  // Ordenar por hora
  result.sort((a, b) => {
    const timeA = convertTimeToMinutes(a.time);
    const timeB = convertTimeToMinutes(b.time);
    return sortOrder.value === 'asc' ? timeA - timeB : timeB - timeA;
  });
  
  return result;
});

// Convertir hora a minutos para ordenar correctamente
const convertTimeToMinutes = (timeString) => {
  const [hours, minutes] = timeString.split(':').map(Number);
  return hours * 60 + minutes;
};

// Cambiar orden de clasificación
const toggleSortOrder = () => {
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
};

// Seleccionar vuelo (expandir/contraer)
const selectFlight = (flight) => {
  flight.expanded = !flight.expanded;
};

// Obtener clase CSS según el estado del vuelo
const getStatusClass = (status) => {
  switch (status.toLowerCase()) {
    case 'en hora': return 'status-on-time';
    case 'retrasado': return 'status-delayed';
    case 'cancelado': return 'status-cancelled';
    default: return '';
  }
};
</script>

<style>
:root {
  --vueling-yellow: #FFCC00;
  --vueling-black: #1A1A1A;
  --vueling-white: #FFFFFF;
  --vueling-gray: #F2F2F2;
  --status-on-time: #4CAF50;
  --status-delayed: #FF9800;
  --status-cancelled: #F44336;
}
</style>

<style scoped>
/* Clases de utilidad para los colores de Vueling */
.bg-vueling-yellow { background-color: var(--vueling-yellow); }
.bg-vueling-black { background-color: var(--vueling-black); }
.bg-vueling-white { background-color: var(--vueling-white); }
.text-vueling-yellow { color: var(--vueling-yellow); }
.text-vueling-black { color: var(--vueling-black); }
.text-vueling-white { color: var(--vueling-white); }
.border-vueling-yellow { border-color: var(--vueling-yellow); }

/* Ocultar scrollbar pero mantener funcionalidad */
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar { display: none; }

/* Personalización del searchbar */
.custom-searchbar {
  --background: var(--vueling-white);
  --color: var(--vueling-black);
  --placeholder-color: #888;
  --icon-color: var(--vueling-black);
  --border-radius: 8px;
  --box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

/* Estilos para la lista de vuelos */
.flight-list-container { margin-bottom: 70px; }

.flight-list {
  max-height: calc(100vh - 250px);
  overflow-y: auto;
  padding-right: 5px;
}

.flight-card {
  border-radius: 12px;
  overflow: hidden;
  margin: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.flight-card:active { transform: scale(0.98); }
.flight-card-content { padding: 16px; position: relative; }
.flight-main-info { display: flex; align-items: center; }

.flight-time-container {
  margin-right: 16px;
  text-align: center;
  min-width: 70px;
}

.flight-time {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--vueling-black);
}

.flight-status {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 2px 6px;
  border-radius: 4px;
  margin-top: 4px;
}

.status-on-time {
  background-color: rgba(76, 175, 80, 0.2);
  color: var(--status-on-time);
}

.status-delayed {
  background-color: rgba(255, 152, 0, 0.2);
  color: var(--status-delayed);
}

.status-cancelled {
  background-color: rgba(244, 67, 54, 0.2);
  color: var(--status-cancelled);
}

.flight-destination { flex: 1; }
.expand-indicator { position: absolute; right: 16px; top: 16px; color: #888; }

/* Detalles del vuelo expandidos */
.flight-details {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #eee;
  animation: expandDetails 0.3s ease;
}

.flight-details-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 16px;
}

.detail-item { display: flex; flex-direction: column; }
.detail-label { font-size: 0.75rem; color: #888; margin-bottom: 4px; }
.detail-value { font-size: 0.875rem; font-weight: 500; color: var(--vueling-black); }
.flight-actions { margin-top: 8px; }

/* Banner de ofertas */
.offers-swiper { height: 80px; }

.offer-banner {
  height: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.offer-content { flex: 1; }
.offer-title { font-size: 1rem; font-weight: bold; margin: 0; }
.offer-description { font-size: 0.875rem; margin: 4px 0 0; }

@keyframes expandDetails {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.flight-item-enter-active,
.flight-item-leave-active { transition: all 0.3s ease; }

.flight-item-enter-from,
.flight-item-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.rotate-90 { transform: rotate(90deg); }
</style>
