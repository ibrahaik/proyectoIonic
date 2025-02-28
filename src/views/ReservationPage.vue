<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button text="" default-href="/"></ion-back-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <!-- Logo -->
        <div class="logo-container">
          <h1 class="logo">BOYLING<span class="yellow-dot"></span></h1>
        </div>
        
        <div class="divider"></div>
  
        <!-- Confirmation Message -->
        <div class="confirmation-message">
          <ion-icon :icon="checkmarkCircle" class="confirmation-icon"></ion-icon>
          <h2 class="confirmation-text">Hola Ibra, reserva confirmada.</h2>
        </div>
  
        <div class="short-divider"></div>
  
        <!-- Take Another Flight -->
        <div class="another-flight">
          <div class="ticket-icon-container">
            <ion-icon :icon="ticket" class="ticket-icon"></ion-icon>
            <span>Con ganas de más?</span>
          </div>
          <router-link to="/home" class="no_underline">
          <ion-button expand="block" class="another-flight-button">
            TOMAR OTRO VUELO
          </ion-button>
          </router-link>
        </div>
  
        <div class="divider"></div>
  
        <!-- Outbound Flight -->
        <div class="flight-card">
          <div class="reservation-code">
            <span>CÓDIGO DE RESERVA:</span>
            <span class="code">Y748MSXZ</span>
          </div>
  
          <div class="flight-type">Ida</div>
  
          <div class="flight-date">Martes, 28 noviembre 2024</div>
  
          <div class="flight-route">
            <div class="origin">
              <div class="city">Barcelona (España)</div>
              <div class="airport-code">BCN</div>
              <div class="time">07:00h</div>
            </div>
            <div class="route-line"></div>
            <div class="destination">
              <div class="city">Estambul (Turquía)</div>
              <div class="airport-code">EST</div>
              <div class="time">11:30h</div>
            </div>
          </div>
  
          <div class="flight-number">Y747MSXZ</div>
        </div>
  
        <div class="divider"></div>
  
        <!-- Return Flight -->
        <div class="flight-card">
          <div class="reservation-code">
            <span>CÓDIGO DE RESERVA:</span>
            <span class="code">Y748MSXZ</span>
          </div>
  
          <div class="flight-type">Vuelta</div>
  
          <div class="flight-date">Miércoles, 31 noviembre 2024</div>
  
          <div class="flight-route">
            <div class="origin">
              <div class="city">Estambul (Turquía)</div>
              <div class="airport-code">EST</div>
              <div class="time">15:30h</div>
            </div>
            <div class="route-line"></div>
            <div class="destination">
              <div class="city">Barcelona (España)</div>
              <div class="airport-code">BCN</div>
              <div class="time">19:00h</div>
            </div>
          </div>
  
          <div class="flight-number">Y747MSXZ</div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { 
    IonPage, IonHeader, IonToolbar, IonContent,
    IonButtons, IonBackButton, IonIcon, IonButton
  } from '@ionic/vue';
  import { checkmarkCircle, ticket } from 'ionicons/icons';
  
  export default defineComponent({
    name: 'ReservationConfirmationView',
    components: {
      IonPage, IonHeader, IonToolbar, IonContent,
      IonButtons, IonBackButton, IonIcon, IonButton
    },
    setup() {
      return {
        checkmarkCircle,
        ticket
      };
    }
  });
  </script>
  
  <style scoped>
  ion-toolbar {
    --background: white;
    --border-color: black;
    --border-width: 0 0 2px 0;
  }
  
  .no_underline{
    text-decoration: none;
  }
  .logo-container {
    padding: 16px;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
    display: flex;
    align-items: center;
  }
  
  .yellow-dot {
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: #ffeb3b;
    border-radius: 50%;
    margin-left: 4px;
  }
  
  .divider {
    height: 1px;
    background-color: #ccc;
    margin: 16px 0;
  }
  
  .short-divider {
    height: 1px;
    background-color: #ccc;
    width: 60%;
    margin: 24px auto;
  }
  
  .confirmation-message {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    margin: 24px 0;
  }
  
  .confirmation-icon {
    color: #21a330;
    font-size: 28px;
    margin-right: 12px;
  }
  
  .confirmation-text {
    color: #21a330;
    font-size: 20px;
    font-weight: 500;
    margin: 0;
  }
  
  .another-flight {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    margin: 24px 0;
  }
  
  .ticket-icon-container {
    display: flex;
    align-items: center;
  }
  
  .ticket-icon {
    color: #bb5c09;
    font-size: 24px;
    margin-right: 8px;
  }
  
  .another-flight-button {
    --background: #ffeb3b;
    --color: black;
    --border-radius: 24px;
    font-weight: bold;
    font-size: 14px;
    height: 40px;
  }
  
  .flight-card {
    background-color: #b1aeae;
    margin: 0;
    padding: 0;
  }
  
  .reservation-code {
    background-color: #b1aeae;
    padding: 12px 16px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    gap: 8px;
  }
  
  .code {
    color: #21a330;
    font-weight: bold;
  }
  
  .flight-type {
    background-color: white;
    padding: 12px 16px;
    font-weight: bold;
    border-bottom: 1px solid #eee;
  }
  
  .flight-date {
    background-color: #b1aeae;
    padding: 12px 16px;
    text-align: center;
    font-weight: 500;
  }
  
  .flight-route {
    background-color: white;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .origin, .destination {
    width: 45%;
  }
  
  .city {
    font-weight: 500;
    margin-bottom: 4px;
  }
  
  .airport-code {
    font-weight: bold;
    margin-bottom: 4px;
  }
  
  .time {
    font-weight: bold;
    font-size: 18px;
  }
  
  .route-line {
    flex-grow: 1;
    height: 1px;
    background-color: #000;
    margin: 0 8px;
  }
  
  .flight-number {
    background-color: white;
    padding: 12px 16px;
    border-top: 1px solid #eee;
    font-size: 14px;
  }
  
  ion-content {
    --background: white;
  }
  </style>