<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Boyling</ion-title>
          <ion-segment v-model="selectedTab">
            <ion-segment-button value="login">
              <ion-label>Accede</ion-label>
            </ion-segment-button>
            <ion-segment-button value="register">
              <ion-label>Regístrate</ion-label>
            </ion-segment-button>
          </ion-segment>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
        <transition name="slide-fade" mode="out-in">
          <div :key="selectedTab">
            <!-- Asegúrate de que LoginForm y RegisterForm estén correctamente definidos -->
            <LoginForm v-if="selectedTab === 'login'" />
            <RegisterForm v-if="selectedTab === 'register'" />
          </div>
        </transition>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import LoginForm from '../views/LoginPage.vue'; // Asegúrate de que la ruta sea correcta
  import RegisterForm from '../views/RegisterPage.vue'; // Asegúrate de que la ruta sea correcta
  
  const selectedTab = ref('login'); // Esto controla qué sección se muestra
  </script>
  
  <style scoped>
  /* Definimos la transición */
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: transform 0.3s ease-in-out, opacity 0.3s;
  }
  
  .slide-fade-enter { 
    transform: translateX(100%); 
    opacity: 0; 
  }
  
  .slide-fade-leave-to { 
    transform: translateX(-100%); 
    opacity: 0; 
  }
  
  .terms-box {
    display: flex;
    align-items: center;
    background-color: #f0f0f0;
    border-radius: 2px;
    padding: 10px;
    width: 90%;
    margin: 10px auto;
  }
  
  .terms-text {
    margin-left: 10px;
    font-size: 14px;
  }
  </style>
  