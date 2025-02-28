<template>
    <ion-page>
      <ion-content class="ion-padding">
        <div class="welcome-section mb-6 mt-4">
          <h1 class="text-3xl font-bold text-primary mb-2">¡Vuelo confirmado! 🎉</h1>
          <h2 class="text-xl text-secondary">¿En qué podemos ayudarte?</h2>
        </div>
  
        <div class="grid grid-cols-2 gap-4 mb-6">
          <ion-card class="card-action" @click="navigateTo('flight-status')">
            
            <div class="card-content">
              <ion-icon :icon="airplane" class="card-icon"></ion-icon>
              <h3 class="card-title">Estado de mi vuelo</h3>
            </div>
          </ion-card>
  
          <ion-card class="card-action" @click="navigateTo('upcoming-flights')">
            <router-link to="flight">
            <div class="card-content">
              <ion-icon :icon="calendar" class="card-icon"></ion-icon>
              <h3 class="card-title">Próximos vuelos</h3>
            </div>
            </router-link>
          </ion-card>
  
          <ion-card class="card-action card-secondary" @click="navigateTo('book-flight')">
          <router-link to="/home">
            <div class="card-content">
              <ion-icon :icon="add" class="card-icon"></ion-icon>
              <h3 class="card-title">Reservar vuelo</h3>
            </div>
            </router-link>
          </ion-card>
  
          <ion-card class="card-action card-secondary" @click="navigateTo('check-in')">
            <router-link to="/reservation">
            <div class="card-content">
              <ion-icon :icon="checkmarkCircle" class="card-icon"></ion-icon>
              <h3 class="card-title">Check-in</h3>
            </div>
            </router-link>
          </ion-card>
        </div>
  
        <div class="menu-items">
            <router-link to="/help">
          <ion-item button detail @click="navigateTo('help')" class="menu-item">
            <ion-icon :icon="helpCircle" slot="start" class="menu-icon"></ion-icon>
            <ion-label>Ayuda</ion-label>
          </ion-item>
          </router-link>
  
          <router-link to="/profile">
          <ion-item button detail @click="navigateTo('profile')" class="menu-item">
            <ion-icon :icon="personCircle" slot="start" class="menu-icon"></ion-icon>
            <ion-label>Mi perfil</ion-label>
          </ion-item>
          </router-link>
        </div>
  
        <div class="logo-container">
          <img src="/boyling.png" alt="Vueling Logo" class="logo" />
        </div>
  
       
      </ion-content>
  
      <ion-footer class="footer">
        <ion-toolbar>
          <div class="footer-buttons">
            <ion-button fill="clear" @click="navigateTo('home')" class="footer-button">
              <ion-icon :icon="home"></ion-icon>
              <span>Inicio</span>
            </ion-button>
  
            <ion-button fill="clear" @click="navigateTo('search')" class="footer-button">
              <ion-icon :icon="search"></ion-icon>
              <span>Buscar</span>
            </ion-button>
  
            <ion-button fill="clear" @click="navigateTo('bookings')" class="footer-button">
              <ion-icon :icon="document"></ion-icon>
              <span>Reservas</span>
            </ion-button>
  
            <ion-button fill="clear" @click="navigateTo('more')" class="footer-button">
              <ion-icon :icon="menu"></ion-icon>
              <span>Más</span>
            </ion-button>
          </div>
        </ion-toolbar>
      </ion-footer>
    </ion-page>
  </template>
  
  <script setup>
  import { 
    IonPage, 
    IonContent, 
    IonCard,
    IonItem,
    IonLabel,
    IonFooter,
    IonToolbar,
    IonButton,
    IonIcon
  } from '@ionic/vue';
  import { 
    airplane, 
    calendar, 
    personCircle, 
    helpCircle, 
    checkmarkCircle, 
    add,
    home,
    search,
    document,
    menu,
    pricetag
  } from 'ionicons/icons';
  
  const navigateTo = (route) => {
    console.log(`Navegando a: ${route}`);
    // Implement navigation with vue-router here
  };
  </script>
  
  <style scoped>
  :root {
    --color-primary: #FFCC00;
    --color-secondary: #1A1A1A;
    --color-background: #F8F8F8;
    --color-text: #333333;
    --color-text-light: #666666;
    --border-radius: 12px;
  }
  
  ion-content {
    --background: var(--color-background);
  }
  
  .welcome-section {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .text-primary {
    color: var(--color-primary);
  }
  
  .text-secondary {
    color: var(--color-secondary);
  }
  
  .card-action {
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .card-action:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .card-content {
    background-color: var(--color-primary);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  
  .card-secondary .card-content {
    background-color: white;
    border: 2px solid var(--color-primary);
  }
  
  .card-icon {
    font-size: 2.5rem;
    color: var(--color-secondary);
    margin-bottom: 0.5rem;
  }
  
  .card-title {
    font-size: 1rem;
    font-weight: bold;
    color: var(--color-secondary);
    text-align: center;
  }
  
  .menu-items {
    margin-top: 2rem;
  }
  
  .menu-item {
    --background: white;
    --background-hover: #f0f0f0;
    border-radius: var(--border-radius);
    margin-bottom: 0.5rem;
  }
  
  .menu-icon {
    color: var(--color-primary);
  }
  
  .logo-container {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }
  
  .logo {
    width: 50%;
  }
  
  .offers-banner {
    background-color: var(--color-secondary);
    border-radius: var(--border-radius);
    padding: 1rem;
    display: flex;
    align-items: center;
    margin-top: 2rem;
  }
  
  .offers-icon {
    font-size: 2.5rem;
    color: var(--color-primary);
    margin-right: 1rem;
  }
  
  .offers-title {
    color: var(--color-primary);
    font-weight: bold;
    margin: 0;
  }
  
  .offers-description {
    color: white;
    margin: 0;
  }
  
  .footer {
    --background: var(--color-secondary);
  }
  
  .footer-buttons {
    display: flex;
    justify-content: space-around;
  }
  
  .footer-button {
    --color: white;
    --color-activated: var(--color-primary);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .footer-button ion-icon {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
  }
  
  .footer-button span {
    font-size: 0.75rem;
  }
  </style>