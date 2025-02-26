<template>
    <ion-page>
      <ion-header>
        <ion-toolbar class="blue-header">
          <ion-buttons slot="start">
            <ion-back-button text="" default-href="/"></ion-back-button>
          </ion-buttons>
          <ion-title class="help-title">AYUDA</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="blue-background">
        <!-- Flight Schedule Table -->
        <div class="schedule-table-container">
          <table class="schedule-table">
            <tbody>
              <tr v-for="(flight, index) in flights" :key="index">
                <td class="airline-code">{{ flight.airline }}</td>
                <td class="flight-number">{{ flight.flightNumber }}</td>
                <td class="destination">{{ flight.destination }}</td>
                <td class="time">{{ flight.time }}</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Offers Button -->
        <div class="offers-button-container">
          <ion-button expand="block" class="offers-button">
            ¡Entérate de nuestras ofertas!
          </ion-button>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { 
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonBackButton, IonButton
  } from '@ionic/vue';
  
  export default defineComponent({
    name: 'FlightScheduleView',
    components: {
      IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
      IonButtons, IonBackButton, IonButton
    },
    setup() {
      const flights = ref([
        { airline: 'BYLG', flightNumber: '39754391', destination: 'IBIZA', time: '21:00' },
        { airline: 'BYLG', flightNumber: '8975179', destination: 'BARCELONA', time: '23:30' },
        { airline: 'BYLG', flightNumber: '39754391', destination: 'PARÍS', time: '0:00' },
        { airline: 'BYLG', flightNumber: '39754391', destination: 'LUXEMBURGO', time: '1:15' },
        { airline: 'BYLG', flightNumber: '39754391', destination: 'ESTAMBUL', time: '2:00' },
        { airline: 'BYLG', flightNumber: '39754391', destination: 'TÁNGER', time: '5:00' },
        { airline: 'BYLG', flightNumber: '39754391', destination: 'MARRAKECH', time: '6:30' },
        { airline: 'BYLG', flightNumber: '39754391', destination: 'RABAT', time: '8:00' },
        { airline: 'BYLG', flightNumber: '39754391', destination: 'FES', time: '10:00' },
        { airline: 'BYLG', flightNumber: '39754391', destination: 'NADOR', time: '11:30' },
        { airline: 'BYLG', flightNumber: '39754391', destination: 'HOCEIMA', time: '13:35' },
        { airline: 'BYLG', flightNumber: '39754391', destination: 'TETOUAN', time: '14:50' },
        { airline: 'BYLG', flightNumber: '39754391', destination: 'OUARZAZATE', time: '16:00' },
        { airline: 'BYLG', flightNumber: '39754391', destination: 'SAHARA', time: '19:30' },
        { airline: 'BYLG', flightNumber: '39754391', destination: 'ALICANTE', time: '20:00' },
        { airline: 'BYLG', flightNumber: '39754391', destination: 'VALENCIA', time: '20:15' }
      ]);
      
      return {
        flights
      };
    }
  });
  </script>
  
  <style scoped>
  .blue-header {
    --background: #0d47a1;
    --color: white;
  }
  
  .help-title {
    text-align: right;
    padding-right: 16px;
  }
  
  .blue-background {
    --background: #0d47a1;
  }
  
  .schedule-table-container {
    padding: 16px;
    overflow-x: auto;
  }
  
  .schedule-table {
    width: 100%;
    border-collapse: collapse;
    color: white;
    background-color: black;
  }
  
  .schedule-table td {
    padding: 12px 8px;
    text-align: center;
    border: 1px solid white;
    white-space: nowrap;
  }
  
  .airline-code {
    width: 20%;
    font-weight: bold;
  }
  
  .flight-number {
    width: 25%;
  }
  
  .destination {
    width: 35%;
    font-weight: bold;
  }
  
  .time {
    width: 20%;
    font-weight: bold;
  }
  
  .offers-button-container {
    padding: 16px;
    margin-top: 24px;
  }
  
  .offers-button {
    --background: #ffeb3b;
    --color: black;
    --border-radius: 24px;
    font-weight: bold;
    height: 48px;
  }
  
  /* Make the table scrollable on smaller screens */
  @media (max-width: 480px) {
    .schedule-table-container {
      overflow-x: auto;
    }
    
    .schedule-table {
      min-width: 480px;
    }
  }
  </style>