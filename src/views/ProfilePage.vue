<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Datos personales</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
        <div class="user-info">
          <ion-avatar>
            <img src="/ei_user.png" alt="User avatar" />
          </ion-avatar>
          <div class="user-details">
            <h2>Ibrahim Haik</h2>
            <p>ibrahimhaik12@gmail.com</p>
          </div>
        </div>
  
        <form @submit.prevent="handleSubmit">
          <ion-item>
            <ion-label position="stacked">País</ion-label>
            <ion-input v-model="formData.country" type="text"></ion-input>
          </ion-item>
  
          <div class="phone-group">
            <ion-item class="prefix-input">
              <ion-label position="stacked">Prefijo</ion-label>
              <ion-input v-model="formData.prefix" type="text"></ion-input>
            </ion-item>
  
            <ion-item class="mobile-input">
              <ion-label position="stacked">Móvil</ion-label>
              <ion-input v-model="formData.mobile" type="tel"></ion-input>
            </ion-item>
          </div>
  
          <ion-item>
            <ion-label position="stacked">DNI/NIE</ion-label>
            <ion-input v-model="formData.dni" type="text"></ion-input>
          </ion-item>
  
          <ion-item>
            <ion-label position="stacked">Fecha de nacimiento</ion-label>
            <ion-input v-model="formData.birthDate" type="date"></ion-input>
          </ion-item>
  
          <ion-item>
            <ion-label>Documentación de residente</ion-label>
            <ion-toggle v-model="formData.residentDocs" slot="end"></ion-toggle>
          </ion-item>
  
          <ion-item>
            <ion-label>Documentación de familia numerosa</ion-label>
            <ion-toggle v-model="formData.familyDocs" slot="end"></ion-toggle>
          </ion-item>
  
          <ion-button expand="block" fill="clear" class="unsubscribe-btn" @click="handleUnsubscribe">
            Date de baja de Boyling
            <ion-icon :icon="chevronForward" slot="end"></ion-icon>
          </ion-button>
  
          <ion-button expand="block" type="submit" class="save-btn">
            GUARDAR
          </ion-button>
        </form>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { 
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
    IonItem, IonLabel, IonInput, IonToggle, IonButton,
    IonBackButton, IonButtons, IonAvatar, IonIcon
  } from '@ionic/vue'
  import { chevronForward } from 'ionicons/icons'
  
  const formData = ref({
    country: '',
    prefix: '',
    mobile: '',
    dni: '',
    birthDate: '',
    residentDocs: false,
    familyDocs: false
  })
  
  const handleSubmit = () => {
    console.log('Form submitted:', formData.value)
  }
  
  const handleUnsubscribe = () => {
    console.log('Unsubscribe clicked')
  }
  </script>
  
  <style scoped>
  .user-info {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    margin-bottom: 1rem;
  }
  
  .user-details {
    margin-left: 1rem;
  }
  
  .user-details h2 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 500;
  }
  
  .user-details p {
    margin: 0;
    color: var(--ion-color-medium);
    font-size: 0.9rem;
  }
  
  .phone-group {
    display: flex;
    gap: 1rem;
  }
  
  .prefix-input {
    flex: 1;
  }
  
  .mobile-input {
    flex: 2;
  }
  
  .unsubscribe-btn {
    margin-top: 2rem;
    --color: var(--ion-color-dark);
  }
  
  .save-btn {
    margin-top: 2rem;
    --background: #ffeb3b;
    --color: black;
    font-weight: bold;
  }
  
  ion-item {
    --padding-start: 0;
    margin-bottom: 0.5rem;
  }
  
  ion-toggle {
    --background: #e0e0e0;
    --background-checked: #ffeb3b;
    --handle-background: white;
    --handle-background-checked: white;
  }
  </style>