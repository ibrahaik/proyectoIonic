<template>
  <ion-page>
    <div class="background-container">
      <transition-group name="fade" tag="div" class="background-slider">
        <div 
          v-for="(image, index) in backgroundImages" 
          :key="image.id" 
          class="background-image" 
          :class="{ active: currentBgIndex === index }"
          :style="{ backgroundImage: `url(${image.url})` }"
        >
          <div class="overlay"></div>
        </div>
      </transition-group>
      
      <div class="parallax-elements" ref="parallaxContainer">
        <div class="parallax-element clouds" ref="clouds"></div>
        <div class="parallax-element plane" ref="plane">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_jh9gfdye.json"
            background="transparent"
            speed="1"
            style="width: 150px; height: 150px;"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>

    <ion-header class="ion-no-border transparent-header">
      <ion-toolbar>
        <div class="header-content">
          <div class="header-actions">
            <ion-button fill="clear" class="currency-selector" @click="openPopover($event)">
              <span class="currency">{{ selectedCurrency }}</span>
              <ion-icon :icon="caretDown" class="currency-icon"></ion-icon>
            </ion-button>
            
            <router-link to="/profile">
              <ion-button fill="clear" class="profile-button">
                <ion-icon :icon="personCircle" class="profile-icon"></ion-icon>
              </ion-button>
            </router-link>
          </div>
        </div>

        <ion-popover :is-open="isPopoverOpen" :event="popoverEvent" @didDismiss="isPopoverOpen = false">
          <ion-list>
            <ion-item v-for="currency in currencies" :key="currency" button @click="selectCurrency(currency)">
              {{ currency }}
            </ion-item>
          </ion-list>
        </ion-popover>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="content-container">
        <div class="title-container" ref="titleContainer">
          <h1 class="main-title">Descubre tu próximo destino</h1>
        </div>
        
        <div class="search-card" ref="searchCard">
          <div class="flight-type-tabs">
            <button 
              v-for="type in flightTypes" 
              :key="type.id" 
              class="tab-button" 
              :class="{ active: selectedFlightType === type.id }"
              @click="selectedFlightType = type.id"
            >
              <ion-icon :icon="type.icon" class="tab-icon"></ion-icon>
              <span>{{ type.label }}</span>
            </button>
          </div>
          
          <div class="search-form">
            <div class="form-group origin-field" @click="openLocationSelector('origin')">
              <label class="form-label">
                <ion-icon :icon="locationOutline" class="form-icon"></ion-icon>
                Origen
              </label>
              <div class="form-input">
                <span v-if="origin">{{ origin }}</span>
                <span v-else class="placeholder">Selecciona origen</span>
                <ion-icon :icon="chevronForward" class="chevron-icon"></ion-icon>
              </div>
            </div>
            
            <button class="swap-button" @click="swapLocations" ref="swapButton">
              <ion-icon :icon="swapVertical" class="swap-icon"></ion-icon>
            </button>
            
            <div class="form-group destination-field" @click="openLocationSelector('destination')">
              <label class="form-label">
                <ion-icon :icon="locationOutline" class="form-icon"></ion-icon>
                Destino
              </label>
              <div class="form-input">
                <span v-if="destination">{{ destination }}</span>
                <span v-else class="placeholder">Selecciona destino</span>
                <ion-icon :icon="chevronForward" class="chevron-icon"></ion-icon>
              </div>
            </div>
            
            <div class="dates-container">
              <div class="form-group date-field" @click="openDatePicker('departure')">
                <label class="form-label">
                  <ion-icon :icon="calendarOutline" class="form-icon"></ion-icon>
                  Ida
                </label>
                <div class="form-input">
                  <span v-if="departureDate">{{ formatDate(departureDate) }}</span>
                  <span v-else class="placeholder">Selecciona fecha</span>
                  <ion-icon :icon="chevronForward" class="chevron-icon"></ion-icon>
                </div>
              </div>
              
              <div class="form-group date-field" v-if="selectedFlightType === 'roundTrip'" @click="openDatePicker('return')">
                <label class="form-label">
                  <ion-icon :icon="calendarOutline" class="form-icon"></ion-icon>
                  Vuelta
                </label>
                <div class="form-input">
                  <span v-if="returnDate">{{ formatDate(returnDate) }}</span>
                  <span v-else class="placeholder">Selecciona fecha</span>
                  <ion-icon :icon="chevronForward" class="chevron-icon"></ion-icon>
                </div>
              </div>
            </div>
            
            <div class="form-group passengers-field">
         <label class="form-label">
        <ion-icon :icon="peopleOutline" class="form-icon"></ion-icon>
        Pasajeros
      </label>
       <div class="form-input">
        <input 
        type="number" 
        v-model="totalPassengers" 
        min="0" 
        placeholder="0" 
       class="passengers-input"
        />
      </div>
      </div>

          </div>
          
          <router-link to="/ida" class="no-underline">
            <button class="search-button" @click="searchFlights" ref="searchButton">
              <span class="button-text">BUSCAR VUELO</span>
              <ion-icon :icon="searchOutline" class="button-icon"></ion-icon>
            </button>
          </router-link>
          
          <div class="promotions">
            <div class="promotion-tag">
              <ion-icon :icon="flashOutline" class="promotion-icon"></ion-icon>
              <span>¡Ofertas Flash!</span>
            </div>
          </div>
        </div>
        
        <div class="popular-destinations" ref="popularDestinationsRef">
          <h2 class="section-title">Destinos populares</h2>
          
          <swiper
            :modules="swiperModules"
            :slides-per-view="2.2"
            :space-between="16"
            :free-mode="true"
            class="destinations-swiper"
          >
            <swiper-slide v-for="destination in popularDestinations" :key="destination.id">
              <div class="destination-card" @click="selectDestination(destination)">
                <div class="destination-image" :style="{ backgroundImage: `url(${destination.image})` }">
                  <div class="destination-overlay"></div>
                  <div class="destination-price">
                    <span>desde</span>
                    <strong>{{ destination.price }}€</strong>
                  </div>
                </div>
                <div class="destination-info">
                  <h3 class="destination-name">{{ destination.name }}</h3>
                  <p class="destination-dates">{{ destination.dates }}</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </ion-content>
    
    <ion-modal :is-open="showLocationModal" @didDismiss="closeLocationModal" class="location-modal">
      <ion-header>
        <ion-toolbar>
          <ion-title>{{ locationModalType === 'origin' ? 'Selecciona origen' : 'Selecciona destino' }}</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="closeLocationModal">Cerrar</ion-button>
          </ion-buttons>
        </ion-toolbar>
        <ion-toolbar>
          <ion-searchbar placeholder="Buscar ciudad o aeropuerto" v-model="locationSearch"></ion-searchbar>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item v-for="location in filteredLocations" :key="location.code" @click="selectLocation(location)">
            <ion-label>
              <h2>{{ location.city }}</h2>
              <p>{{ location.airport }} ({{ location.code }})</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-modal>
    
    <ion-modal :is-open="showDateModal" @didDismiss="closeDateModal" class="date-modal">
      <ion-header>
        <ion-toolbar>
          <ion-title>{{ dateModalType === 'departure' ? 'Fecha de ida' : 'Fecha de vuelta' }}</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="closeDateModal">Cerrar</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-datetime
          presentation="date"
          :min="dateModalType === 'return' && departureDate ? formatISODate(departureDate) : formatISODate(new Date())"
          v-model="tempDate"
          locale="es-ES"
          :first-day-of-week="1"
          @ionChange="handleDateChange"
        ></ion-datetime>
      </ion-content>
    </ion-modal>
    
    <ion-modal :is-open="showPassengersModal" @didDismiss="closePassengersModal" class="passengers-modal">
      <ion-header>
        <ion-toolbar>
          <ion-title>Pasajeros</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="closePassengersModal">Cerrar</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <div class="passenger-selector">
          <div class="passenger-type" v-for="(count, type) in passengers" :key="type">
            <div class="passenger-info">
              <h3>{{ getPassengerTypeLabel(type) }}</h3>
              <p>{{ getPassengerTypeDescription(type) }}</p>
            </div>
            <div class="passenger-controls">
              <ion-button 
                fill="clear" 
                :disabled="getMinPassengers(type) >= count"
                @click="decrementPassenger(type)"
              >
                <ion-icon :icon="removeCircleOutline" class="control-icon"></ion-icon>
              </ion-button>
              <span class="passenger-count">{{ count }}</span>
              <ion-button 
                fill="clear" 
                :disabled="getMaxPassengers(type) <= count"
                @click="incrementPassenger(type)"
              >
                <ion-icon :icon="addCircleOutline" class="control-icon"></ion-icon>
              </ion-button>
            </div>
          </div>
          
          <ion-button expand="block" class="confirm-passengers" @click="confirmPassengers">
            Confirmar
          </ion-button>
        </div>
      </ion-content>
    </ion-modal>
  </ion-page>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { 
  IonPage, IonHeader, IonToolbar, IonContent, IonButton, IonIcon,
  IonModal, IonTitle, IonButtons, IonSearchbar, IonList, IonItem,
  IonLabel, IonPopover, IonDatetime
} from '@ionic/vue';
import { 
  personCircle, caretDown, locationOutline, calendarOutline, peopleOutline,
  chevronForward, swapVertical, searchOutline, flashOutline, airplaneOutline,
  repeatOutline, addCircleOutline, removeCircleOutline
} from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { gsap } from 'gsap';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const selectedCurrency = ref('EUR');
const isPopoverOpen = ref(false);
const popoverEvent = ref(null);
const currencies = ref(['EUR', 'USD', 'GBP', 'JPY', 'AUD']);

const backgroundImages = ref([
  { id: 1, url: '/coliseo.png' },
  { id: 2, url: '/francia.png' },
  { id: 3, url: '/templo.png' }
]);
const currentBgIndex = ref(0);
const bgInterval = ref(null);

const flightTypes = ref([
  { id: 'oneWay', label: 'Solo ida', icon: airplaneOutline },
  { id: 'roundTrip', label: 'Ida y vuelta', icon: repeatOutline }
]);
const selectedFlightType = ref('roundTrip');

const origin = ref('');
const destination = ref('');
const showLocationModal = ref(false);
const locationModalType = ref('origin');
const locationSearch = ref('');

const departureDate = ref(null);
const returnDate = ref(null);
const showDateModal = ref(false);
const dateModalType = ref('departure');
const tempDate = ref('');

const passengers = ref({
  adults: 1,
  children: 0,
  infants: 0
});
const showPassengersModal = ref(false);

const popularDestinations = ref([
  {
    id: 1,
    name: 'Barcelona',
    code: 'BCN',
    price: 39,
    dates: 'Abr - Jun 2023',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 2,
    name: 'París',
    code: 'CDG',
    price: 59,
    dates: 'May - Jul 2023',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80'
  },
  {
    id: 3,
    name: 'Roma',
    code: 'FCO',
    price: 49,
    dates: 'Jun - Ago 2023',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1396&q=80'
  },
  {
    id: 4,
    name: 'Londres',
    code: 'LHR',
    price: 45,
    dates: 'May - Sep 2023',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  }
]);

const airports = ref([
  { code: 'BCN', city: 'Barcelona', airport: 'El Prat' },
  { code: 'MAD', city: 'Madrid', airport: 'Barajas' },
  { code: 'VLC', city: 'Valencia', airport: 'Manises' },
  { code: 'AGP', city: 'Málaga', airport: 'Costa del Sol' },
  { code: 'IBZ', city: 'Ibiza', airport: 'Ibiza' },
  { code: 'PMI', city: 'Palma de Mallorca', airport: 'Son Sant Joan' },
  { code: 'LPA', city: 'Gran Canaria', airport: 'Gran Canaria' },
  { code: 'TFS', city: 'Tenerife', airport: 'Sur' },
  { code: 'CDG', city: 'París', airport: 'Charles de Gaulle' },
  { code: 'LHR', city: 'Londres', airport: 'Heathrow' },
  { code: 'FCO', city: 'Roma', airport: 'Fiumicino' },
  { code: 'AMS', city: 'Ámsterdam', airport: 'Schiphol' }
]);

const titleContainer = ref(null);
const searchCard = ref(null);
const swapButton = ref(null);
const searchButton = ref(null);
const popularDestinationsRef = ref(null);
const parallaxContainer = ref(null);
const clouds = ref(null);
const plane = ref(null);

const swiperModules = [FreeMode];

const totalPassengers = computed(() => {
  return passengers.value.adults + passengers.value.children + passengers.value.infants;
});

const filteredLocations = computed(() => {
  if (!locationSearch.value) return airports.value;
  
  const search = locationSearch.value.toLowerCase();
  return airports.value.filter(airport => 
    airport.city.toLowerCase().includes(search) || 
    airport.code.toLowerCase().includes(search) ||
    airport.airport.toLowerCase().includes(search)
  );
});

const openPopover = (event) => {
  popoverEvent.value = event;
  isPopoverOpen.value = true;
};

const selectCurrency = (currency) => {
  selectedCurrency.value = currency;
  isPopoverOpen.value = false;
};

const startBackgroundSlider = () => {
  bgInterval.value = setInterval(() => {
    currentBgIndex.value = (currentBgIndex.value + 1) % backgroundImages.value.length;
  }, 2000);
};

const stopBackgroundSlider = () => {
  if (bgInterval.value) {
    clearInterval(bgInterval.value);
    bgInterval.value = null;
  }
};

const openLocationSelector = (type) => {
  locationModalType.value = type;
  locationSearch.value = '';
  showLocationModal.value = true;
};

const closeLocationModal = () => {
  showLocationModal.value = false;
};

const selectLocation = (location) => {
  if (locationModalType.value === 'origin') {
    origin.value = `${location.city} (${location.code})`;
  } else {
    destination.value = `${location.city} (${location.code})`;
  }
  closeLocationModal();
};

const swapLocations = () => {
  const temp = origin.value;
  origin.value = destination.value;
  destination.value = temp;
  
  gsap.to(swapButton.value, {
    rotation: 180,
    duration: 0.5,
    ease: "back.out(1.7)",
    onComplete: () => {
      gsap.set(swapButton.value, { rotation: 0 });
    }
  });
};

const formatISODate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  return d.toISOString().split('T')[0];
};

const openDatePicker = (type) => {
  dateModalType.value = type;
  tempDate.value = type === 'departure' ? 
    (departureDate.value ? new Date(departureDate.value).toISOString() : new Date().toISOString()) : 
    (returnDate.value ? new Date(returnDate.value).toISOString() : new Date().toISOString());
  showDateModal.value = true;
};

const closeDateModal = () => {
  showDateModal.value = false;
};

const handleDateChange = (event) => {
  const selectedDateValue = event.detail.value;
  if (dateModalType.value === 'departure') {
    departureDate.value = new Date(selectedDateValue);
    if (returnDate.value && returnDate.value < departureDate.value) {
      returnDate.value = null;
    }
  } else {
    returnDate.value = new Date(selectedDateValue);
  }
  closeDateModal();
};

const formatDate = (date) => {
  return format(new Date(date), 'EEE, d MMM', { locale: es });
};


const selectDestination = (destination) => {
  destination.value = `${destination.name} (${destination.code})`;
};

const searchFlights = () => {
  gsap.to(searchButton.value, {
    scale: 0.95,
    duration: 0.1,
    yoyo: true,
    repeat: 1
  });
};

const initAnimations = () => {
  gsap.from(titleContainer.value, {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });
  
  gsap.from(searchCard.value, {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out"
  });
  
  gsap.from(popularDestinationsRef.value, {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: "power3.out"
  });
  
  document.addEventListener('mousemove', (e) => {
    if (!parallaxContainer.value) return;
    
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    gsap.to(clouds.value, {
      x: xAxis,
      y: yAxis,
      duration: 1
    });
    
    gsap.to(plane.value, {
      x: -xAxis * 0.5,
      y: -yAxis * 0.5,
      duration: 1
    });
  });
};

onMounted(() => {
  startBackgroundSlider();
  initAnimations();
  
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
  document.head.appendChild(script);
});

watch(() => selectedFlightType.value, (newValue) => {
  if (newValue === 'oneWay') {
    returnDate.value = null;
  }
});
</script>

<style>
:root {
  --vueling-yellow: #FFCC00;
  --vueling-black: #1A1A1A;
  --vueling-white: #FFFFFF;
  --vueling-gray: #F2F2F2;
}
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
* { font-family: 'Montserrat', sans-serif; }
</style>

<style scoped>
.no-underline { text-decoration: none !important; }

.background-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.background-slider { position: relative; width: 100%; height: 100%; }

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1s ease;
}

.background-image.active { opacity: 1; }

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%);
}

.parallax-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.parallax-element { position: absolute; }

.clouds {
  top: 10%;
  right: 10%;
  width: 100%;
  height: 30%;
  background-image: url('https://assets.codepen.io/3685267/cloud-1.png');
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.7;
}

.plane { top: 20%; left: 10%; z-index: 2; }

.transparent-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: black;
}

.transparent-header ion-toolbar {
  --background: transparent;
  --border-color: transparent;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
}

.header-actions { display: flex; align-items: center; }

.currency-selector {
  --padding-start: 8px;
  --padding-end: 8px;
  height: 36px;
  margin-right: 8px;
}

.currency {
  color: var(--vueling-white);
  font-weight: 600;
  font-size: 14px;
}

.currency-icon {
  color: var(--vueling-white);
  margin-left: 4px;
}

.profile-button {
  --padding-start: 8px;
  --padding-end: 8px;
  height: 36px;
}

.profile-icon {
  color: var(--vueling-white);
  font-size: 24px;
}

.content-container {
  padding: 16px;
  padding-top: 80px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #dbd9d9;
}

.title-container { margin-bottom: 24px; text-align: center; }

.main-title {
  color: black;
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.search-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
}

.flight-type-tabs {
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 12px;
}

.tab-button {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: transparent;
  border: none;
  color: #888;
  font-weight: 500;
  transition: all 0.3s ease;
  border-radius: 8px;
}

.tab-button.active {
  color: var(--vueling-black);
  background-color: var(--vueling-yellow);
}

.tab-icon { margin-right: 6px; font-size: 18px; }

.search-form { margin-bottom: 20px; }

.form-group {
  margin-bottom: 16px;
  background-color: var(--vueling-white);
  border-radius: 8px;
  padding: 12px 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  position: relative;
}

.form-label {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #888;
  margin-bottom: 4px;
}

.form-icon { margin-right: 6px; font-size: 16px; }

.form-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: var(--vueling-black);
}

.placeholder { color: #aaa; }
.chevron-icon { color: #888; font-size: 16px; }

.swap-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--vueling-yellow);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.swap-icon { color: var(--vueling-black); font-size: 20px; }
.origin-field { padding-right: 40px; }
.destination-field { padding-right: 40px; }

.dates-container {
  display: flex;
  gap: 12px;
}

.date-field { flex: 1; }

.search-button {
  width: 100%;
  height: 56px;
  border-radius: 28px;
  background-color: var(--vueling-yellow);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vueling-black);
  font-weight: 700;
  font-size: 16px;
  box-shadow: 0 4px 12px rgba(255, 204, 0, 0.3);
  transition: all 0.3s ease;
}

.search-button:active {
  transform: scale(0.98);
  box-shadow: 0 2px 8px rgba(255, 204, 0, 0.3);
}

.button-text { margin-right: 8px; }
.button-icon { font-size: 20px; }

.promotions {
  margin-top: 16px;
  display: flex;
  justify-content: center;
}

.promotion-tag {
  display: flex;
  align-items: center;
  background-color: rgba(255, 204, 0, 0.2);
  padding: 6px 12px;
  border-radius: 16px;
  color: var(--vueling-black);
  font-size: 12px;
  font-weight: 600;
}

.promotion-icon {
  margin-right: 6px;
  color: var(--vueling-yellow);
}

.popular-destinations {
  margin-top: auto;
  padding-bottom: 16px;
}

.section-title {
  color: var(--vueling-white);
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
}

.destinations-swiper { width: 100%; }

.destination-card {
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--vueling-white);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.destination-image {
  height: 120px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.destination-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%);
}

.destination-price {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: var(--vueling-yellow);
  padding: 4px 8px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
}

.destination-price span { font-size: 10px; color: var(--vueling-black); }
.destination-price strong { font-size: 14px; color: var(--vueling-black); }
.destination-info { padding: 12px; }

.destination-name {
  margin: 0 0 4px;
  font-size: 14px;
  font-weight: 600;
  color: var(--vueling-black);
}

.destination-dates {
  margin: 0;
  font-size: 12px;
  color: #888;
}

.location-modal {
  --height: 70%;
  --border-radius: 16px 16px 0 0;
}

.date-modal {
  --height: 50%;
  --border-radius: 16px 16px 0 0;
}

.passengers-modal {
  --height: auto;
  --border-radius: 16px 16px 0 0;
}

.passenger-selector { padding: 16px 0; }

.passenger-type {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #eee;
}

.passenger-info h3 {
  margin: 0 0 4px;
  font-size: 16px;
  font-weight: 600;
  color: var(--vueling-black);
}

.passenger-info p {
  margin: 0;
  font-size: 12px;
  color: #888;
}

.passenger-controls {
  display: flex;
  align-items: center;
}

.control-icon { font-size: 24px; }

.passenger-count {
  width: 30px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
}

.confirm-passengers {
  margin-top: 24px;
  --background: var(--vueling-yellow);
  --color: var(--vueling-black);
  --border-radius: 28px;
  --box-shadow: 0 4px 12px rgba(255, 204, 0, 0.3);
  font-weight: 700;
}

.fade-enter-active,
.fade-leave-active { transition: opacity 1s ease; }

.fade-enter-from,
.fade-leave-to { opacity: 0; }
</style>