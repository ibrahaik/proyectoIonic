<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="end">
          <ion-button @click="showCancelAlert" class="cancel-button">Cancelar</ion-button>
        </ion-buttons>
        <ion-title>Datos de pago</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div v-if="isLoading" class="loading-screen">
        <ion-spinner name="crescent"></ion-spinner>
        <p>Procesando pago...</p>
      </div>
      
      <div v-else>
        <div class="info-notice">
          <ion-icon :icon="informationCircle" class="info-icon"></ion-icon>
          <span>Introduce los datos tal y como figuran en el documento de identidad.</span>
        </div>

        <div class="card-section">
          <div class="card-header">
            <ion-icon :icon="card" class="card-icon"></ion-icon>
            <h2>TARJETA</h2>
          </div>

          <div class="card-form">
            <ion-item class="custom-input">
              <ion-input v-model="cardData.number" placeholder="Número de tarjeta" type="tel"></ion-input>
            </ion-item>

            <ion-item class="custom-input">
              <ion-input v-model="cardData.type" placeholder="Tipo de tarjeta"></ion-input>
            </ion-item>

            <ion-item class="custom-input">
              <ion-input v-model="cardData.name" placeholder="Nombre del titular"></ion-input>
            </ion-item>

            <div class="expiry-cvv">
              <ion-item class="custom-input expiry-input">
                <ion-input v-model="cardData.expiry" placeholder="Caducidad" type="tel"></ion-input>
              </ion-item>

              <ion-item class="custom-input cvv-input">
                <ion-input v-model="cardData.cvv" placeholder="CVV" type="tel" maxlength="3"></ion-input>
              </ion-item>
            </div>
          </div>
        </div>

        <div class="saf-section">
          <div class="saf-header">
            <div class="saf-title">
              <span class="saf-label">SAF</span>
              <div class="saf-text">
                <span>Contribuye con combustible sostenible (SAF)</span>
                <a href="#" class="info-link">+info</a>
              </div>
            </div>
            <ion-toggle v-model="sustainableFuel" class="custom-toggle"></ion-toggle>
          </div>
          <p class="saf-description">
            Colabora con un 2% (2,04€) e igualaremos tu donación para reducir las emisiones de CO2.
          </p>
        </div>

        <div class="terms-section">
          <div class="terms-header">
            <span>He leído, entiendo y acepto:</span>
            <ion-toggle v-model="termsAccepted" class="custom-toggle"></ion-toggle>
          </div>
          <a href="#" class="terms-link">Condiciones de transporte Boyling</a>
        </div>

        <ion-footer class="footer">
          <div class="price-container">
            <div class="price-label">TOTAL RESERVA</div>
            <div class="price-amount">280,48€</div>
          </div>
          <ion-button 
            expand="block" 
            class="pay-button" 
            :disabled="!isPaymentFormValid"
            @click="processPayment"
          >
            PAGAR AHORA
          </ion-button>
        </ion-footer>
      </div>
    </ion-content>

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
  IonButton, IonButtons, IonAlert, IonItem, IonInput, IonToggle,
  IonFooter, IonIcon, IonSpinner
} from '@ionic/vue';
import { informationCircle, card } from 'ionicons/icons';

export default defineComponent({
  name: 'PaymentFormView',
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
    IonButton, IonButtons, IonAlert, IonItem, IonInput, IonToggle,
    IonFooter, IonIcon, IonSpinner
  },
  setup() {
    const router = useRouter();
    const cardData = ref({
      number: '',
      type: '',
      name: '',
      expiry: '',
      cvv: ''
    });
    const sustainableFuel = ref(false);
    const termsAccepted = ref(false);
    const showAlert = ref(false);
    const isLoading = ref(false);

    const isPaymentFormValid = computed(() => {
      return (
        cardData.value.number &&
        cardData.value.type &&
        cardData.value.name &&
        cardData.value.expiry &&
        cardData.value.cvv &&
        termsAccepted.value
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
          router.push('/vuelta').then(() => {
            window.location.reload();
          });
        }
      }
    ];

    const processPayment = () => {
      if (isPaymentFormValid.value) {
        isLoading.value = true;
        setTimeout(() => {
          router.push('/encuentro');
        }, 2000);
      }
    };

    const showCancelAlert = () => {
      showAlert.value = true;
    };

    return {
      cardData,
      sustainableFuel,
      termsAccepted,
      processPayment,
      showAlert,
      alertButtons,
      isPaymentFormValid,
      showCancelAlert,
      informationCircle,
      card,
      isLoading
    };
  }
});
</script>

<style scoped>
.loading-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
}

.loading-screen p {
  margin-top: 10px;
  font-size: 18px;
  color: #333;
}

ion-toolbar {
  --background: white;
  --border-color: #e0e0e0;
}

.no_underline {
  text-decoration: none;
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
  margin: 16px;
}

.info-icon {
  color: #0c92b7;
  font-size: 24px;
  margin-right: 12px;
}

.card-section {
  background-color: #e0e0e0;
  border-radius: 16px;
  padding: 16px;
  margin: 16px;
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.card-icon {
  font-size: 24px;
  margin-right: 12px;
}

.card-header h2 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.card-form {
  background-color: #e0e0e0;
}

.custom-input {
  --background: white;
  --padding-start: 12px;
  --padding-end: 12px;
  --inner-padding-end: 0;
  border-radius: 4px;
  margin-bottom: 12px;
}

.expiry-cvv {
  display: flex;
  gap: 12px;
}

.expiry-input {
  flex: 1;
}

.cvv-input {
  flex: 1;
}

.saf-section {
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 16px;
  margin: 16px;
}

.saf-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.saf-title {
  display: flex;
  align-items: center;
}

.saf-label {
  color: #12926d;
  font-weight: bold;
  margin-right: 12px;
}

.saf-text {
  display: flex;
  flex-direction: column;
}

.info-link {
  color: #12926d;
  text-decoration: none;
  font-size: 14px;
}

.saf-description {
  color: #666;
  font-size: 14px;
  margin: 8px 0 0;
}

.terms-section {
  background-color: #f5f5f5;
  padding: 16px;
  margin: 16px 0;
}

.terms-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.terms-link {
  color: #12926d;
  text-decoration: none;
}

.custom-toggle {
  --background: #e0e0e0;
  --background-checked: #12926d;
  --handle-background: white;
  --handle-background-checked: white;
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
  font-weight: bold;
}

.price-amount {
  font-size: 24px;
  font-weight: bold;
}

.pay-button {
  --background: #ffeb3b;
  --color: black;
  --border-radius: 24px;
  font-weight: bold;
  margin: 0;
  width: 180px;
}

ion-content {
  --background: white;
  --padding-bottom: 80px;
}
</style>
