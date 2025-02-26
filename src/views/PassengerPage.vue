<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button text="" default-href="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Pasajeros</ion-title>
          <ion-buttons slot="end">
            <ion-button class="cancel-button">Cancelar</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
        <!-- Info Notice -->
        <div class="info-notice">
          <ion-icon :icon="informationCircle" class="info-icon"></ion-icon>
          <span>Introduce los datos tal y como figuran en el documento de identidad.</span>
        </div>
  
        <!-- Passenger Section -->
        <div class="passenger-section">
          <div class="passenger-header">
            <ion-icon :icon="person" class="person-icon"></ion-icon>
            <h2>ADULTO 1</h2>
          </div>
  
          <ion-item class="custom-input">
            <ion-label position="floating">Nombre</ion-label>
            <ion-input v-model="passenger.firstName"></ion-input>
          </ion-item>
  
          <ion-item class="custom-input">
            <ion-label position="floating">Apellidos</ion-label>
            <ion-input v-model="passenger.lastName"></ion-input>
          </ion-item>
        </div>
  
        <!-- Contact Section -->
        <div class="section-divider"></div>
        
        <div class="contact-section">
          <h2 class="section-title">DATOS DE CONTACTO</h2>
  
          <ion-item class="custom-input">
            <ion-label position="floating">Nombre</ion-label>
            <ion-input v-model="contact.firstName"></ion-input>
          </ion-item>
  
          <ion-item class="custom-input">
            <ion-label position="floating">Apellidos</ion-label>
            <ion-input v-model="contact.lastName"></ion-input>
          </ion-item>
  
          <ion-item class="custom-input">
            <ion-label position="floating">País</ion-label>
            <ion-input v-model="contact.country"></ion-input>
          </ion-item>
  
          <div class="phone-group">
            <ion-item class="custom-input prefix-input">
              <ion-label position="floating">Prefijo</ion-label>
              <ion-input v-model="contact.prefix"></ion-input>
            </ion-item>
  
            <ion-item class="custom-input mobile-input">
              <ion-label position="floating">Móvil</ion-label>
              <ion-input v-model="contact.mobile" type="tel"></ion-input>
            </ion-item>
          </div>
          
          <div class="helper-text">Escribe el país o prefijo</div>
  
          <ion-item class="custom-input">
            <ion-label position="floating">Email</ion-label>
            <ion-input v-model="contact.email" type="email"></ion-input>
          </ion-item>
        </div>
  
        <!-- Promotions Section -->
        <div class="promo-section">
          <h3>¡No te pierdas nada! Entérate de nuestras promociones y descuentos.</h3>
          
          <div class="checkbox-container">
            <ion-checkbox v-model="contact.promoOptIn"></ion-checkbox>
            <div class="checkbox-label">
              Sí, quiero estar al día de las oferta y novedades de Boyling o de empresas colaboradoras. 
              <a href="#" class="terms-link">Ver condiciones</a>
            </div>
          </div>
        </div>
  
        <!-- Logo -->
        <div class="logo-container">
          <div class="logo">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BOYLING_2C_IBRAHIM-aR0NMnNCQK2FpJ2yqSgL9YeDOgOwuB.png" alt="Boyling logo" class="logo-image" />
          </div>
        </div>
  
        <!-- Footer -->
        <ion-footer class="footer">
          <div class="price-container">
            <div class="price-label">Total reserva</div>
            <div class="price-amount">251,99€</div>
          </div>
          <ion-button expand="block" class="continue-button">
            CONTINUAR
          </ion-button>
        </ion-footer>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { 
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
    IonButton, IonButtons, IonBackButton, IonItem, IonLabel,
    IonInput, IonCheckbox, IonIcon, IonFooter
  } from '@ionic/vue';
  import { informationCircle, person } from 'ionicons/icons';
  
  export default defineComponent({
    name: 'PassengerFormView',
    components: {
      IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
      IonButton, IonButtons, IonBackButton, IonItem, IonLabel,
      IonInput, IonCheckbox, IonIcon, IonFooter
    },
    setup() {
      const passenger = ref({
        firstName: '',
        lastName: ''
      });
      
      const contact = ref({
        firstName: '',
        lastName: '',
        country: '',
        prefix: '',
        mobile: '',
        email: '',
        promoOptIn: false
      });
      
      return {
        passenger,
        contact,
        informationCircle,
        person
      };
    }
  });
  </script>
  
  <style scoped>
  ion-toolbar {
    --background: white;
    --border-color: #e0e0e0;
  }
  
  .cancel-button {
    color: #777;
    font-weight: normal;
  }
  
  .info-notice {
    display: flex;
    align-items: center;
    background-color: #e6f7fa;
    border: 1px solid #0c92b7;
    border-radius: 8px;
    padding: 12px;
    margin: 16px 0;
  }
  
  .info-icon {
    color: #0c92b7;
    font-size: 24px;
    margin-right: 12px;
  }
  
  .passenger-header {
    display: flex;
    align-items: center;
    margin: 16px 0;
  }
  
  .person-icon {
    font-size: 24px;
    margin-right: 12px;
  }
  
  .passenger-header h2 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }
  
  .custom-input {
    --padding-start: 0;
    --border-color: transparent;
    --border-style: solid;
    --border-width: 0 0 1px 0;
    --highlight-height: 0;
    margin-bottom: 16px;
  }
  
  .section-divider {
    height: 8px;
    background-color: #f5f5f5;
    margin: 24px -16px;
  }
  
  .section-title {
    font-size: 18px;
    font-weight: bold;
    margin: 16px 0;
  }
  
  .phone-group {
    display: flex;
    gap: 16px;
  }
  
  .prefix-input {
    flex: 1;
  }
  
  .mobile-input {
    flex: 2;
  }
  
  .helper-text {
    color: #0c92b7;
    font-size: 12px;
    margin: -12px 0 16px 0;
  }
  
  .promo-section {
    background-color: #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    margin: 24px 0;
  }
  
  .promo-section h3 {
    margin-top: 0;
    font-size: 16px;
    font-weight: bold;
  }
  
  .checkbox-container {
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }
  
  .checkbox-label {
    font-size: 14px;
    color: #666;
  }
  
  .terms-link {
    color: #0c92b7;
    text-decoration: none;
  }
  
  .logo-container {
    display: flex;
    justify-content: center;
    margin: 32px 0;
  }
  
  .logo {
    width: 100px;
    height: 100px;
    background-color: #ffeb3b;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .logo-image {
    width: 60px;
    height: 60px;
  }
  
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-top: 1px solid #e0e0e0;
    background-color: white;
  }
  
  .price-container {
    display: flex;
    flex-direction: column;
  }
  
  .price-label {
    font-size: 14px;
    color: #666;
  }
  
  .price-amount {
    font-size: 24px;
    font-weight: bold;
  }
  
  .continue-button {
    --background: #ffeb3b;
    --color: black;
    --border-radius: 24px;
    font-weight: bold;
    margin: 0;
    width: 180px;
  }
  
  ion-content {
    --padding-bottom: 120px;
  }
  
  ion-checkbox {
    --size: 20px;
    --border-radius: 4px;
    --border-color: #999;
    --border-color-checked: #0c92b7;
    --background-checked: #0c92b7;
    --checkmark-color: white;
  }
  </style>