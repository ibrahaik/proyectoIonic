<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Pasajeros</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="showCancelAlert" class="cancel-button">Cancelar</ion-button>
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
        <div v-if="!passenger.firstName" class="error-message">Este campo es obligatorio</div>
  
        <ion-item class="custom-input">
          <ion-label position="floating">Apellidos</ion-label>
          <ion-input v-model="passenger.lastName"></ion-input>
        </ion-item>
        <div v-if="!passenger.lastName" class="error-message">Este campo es obligatorio</div>
      </div>
  
      <!-- Contact Section -->
      <div class="section-divider"></div>
      
      <div class="contact-section">
        <h2 class="section-title">DATOS DE CONTACTO</h2>
  
        <ion-item class="custom-input">
          <ion-label position="floating">Nombre</ion-label>
          <ion-input v-model="contact.firstName"></ion-input>
        </ion-item>
        <div v-if="!contact.firstName" class="error-message">Este campo es obligatorio</div>
        
        <ion-item class="custom-input">
          <ion-label position="floating">Apellidos</ion-label>
          <ion-input v-model="contact.lastName"></ion-input>
        </ion-item>
        <div v-if="!contact.lastName" class="error-message">Este campo es obligatorio</div>
  
        <ion-item class="custom-input">
          <ion-label position="floating">País</ion-label>
          <ion-input v-model="contact.country"></ion-input>
        </ion-item>
        <div v-if="!contact.country" class="error-message">Este campo es obligatorio</div>
  
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
        <div v-if="!contact.email" class="error-message">Este campo es obligatorio</div>
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
          <img src="/boyling.png" alt="Boyling logo" class="logo-image" />
      </div>
  
      <!-- Footer -->
      <ion-footer class="footer">
        <div class="price-container">
          <div class="price-label">Total reserva</div>
          <div class="price-amount">251,99€</div>
        </div>
        <router-link to="/seat" class="no_underline">
        <ion-button expand="block" class="continue-button" :disabled="isFormInvalid" @click="submitForm">
          CONTINUAR
        </ion-button>
        </router-link>
      </ion-footer>
    </ion-content>
  
    <!-- Alert for cancellation -->
    <ion-alert
      :is-open="showAlert"
      header="Confirmación"
      message="Los datos no se guardarán. ¿Seguro que quieres cancelar?"
      :buttons="alertButtons"
    />
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonButton, IonButtons, IonBackButton, IonItem, IonLabel,
  IonInput, IonCheckbox, IonIcon, IonFooter, IonAlert
} from '@ionic/vue';
import { informationCircle, person } from 'ionicons/icons';

export default defineComponent({
  name: 'PassengerFormView',
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
    IonButton, IonButtons, IonBackButton, IonItem, IonLabel,
    IonInput, IonCheckbox, IonIcon, IonFooter, IonAlert
  },
  setup() {
    const router = useRouter();
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
    
    const showAlert = ref(false);
    
    const isFormInvalid = computed(() => {
      return !(
        passenger.value.firstName && passenger.value.lastName &&
        contact.value.firstName && contact.value.lastName && 
        contact.value.country && contact.value.prefix && 
        contact.value.mobile && contact.value.email
      );
    });
    
    const alertButtons = [
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
          showAlert.value = false;
        }
      },
      {
        text: 'Sí',
        handler: () => {
          router.push('/vuelta');
        }
      }
    ];
    
    const showCancelAlert = () => {
      showAlert.value = true;
    };
    
    const submitForm = () => {
      if (!isFormInvalid.value) {
        // Procesar el formulario aquí
        console.log("Formulario enviado");
      }
    };
    
    return {
      passenger,
      contact,
      informationCircle,
      person,
      showAlert,
      isFormInvalid,
      alertButtons,
      showCancelAlert,
      submitForm
    };
  }
});
</script>

<style scoped>
ion-toolbar {
  --background: white;
  --border-color: #e0e0e0;
}

.no_underline {
  text-decoration: none;
}
.error-message {
  color: red;
  font-size: 12px;
  margin-top: 4px;
}

.continue-button:disabled {
  background-color: #ccc;
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
  width: 50%;
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

ion-input {
  margin-top: 25px;
  background-color: gray;
  width: 100%;
  border-radius: 10px;
  opacity: 0.5;
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
