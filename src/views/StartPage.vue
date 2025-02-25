<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="custom-title">Boyling</ion-title>
        <ion-segment @ionChange="handleTabChange">
          <ion-segment-button value="login" :checked="selectedTab === 'login'">
            <ion-label>Accede</ion-label>
          </ion-segment-button>
          <ion-segment-button value="register" :checked="selectedTab === 'register'">
            <ion-label>Regístrate</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <transition name="slide-fade" mode="out-in">
        <component :is="selectedTab === 'login' ? LoginPage : RegisterPage" :key="selectedTab" />
      </transition>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';

const selectedTab = ref('login');

const handleTabChange = (event) => {
  selectedTab.value = event.detail.value;
  console.log("Tab cambiado a:", selectedTab.value);
};
</script>

<style scoped>
/* Transiciones */
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

.custom-title {
  color: #1D1D1B;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 22px;
  text-align: left;
  margin-left: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
