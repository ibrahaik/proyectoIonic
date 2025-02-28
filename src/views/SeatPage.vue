<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button text="" default-href="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Ida</ion-title>
          <ion-buttons slot="end">
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
        <!-- Passenger Info -->
        <div class="passenger-info">
          <ion-icon :icon="person" class="person-icon"></ion-icon>
          <span>Ibrahim haik</span>
        </div>
  
        <!-- Seat Map Header -->
        <div class="seat-map-header">
          <div class="left-seats">
            <div class="seat-letter">A</div>
            <div class="seat-letter">B</div>
            <div class="seat-letter">C</div>
          </div>
          <div class="row-number"></div>
          <div class="right-seats">
            <div class="seat-letter">D</div>
            <div class="seat-letter">E</div>
            <div class="seat-letter">F</div>
          </div>
        </div>
  
        <!-- Seat Class Info -->
        <div class="seat-class">
          <div class="class-header">
            <h2>Space one <span class="yellow-dot"></span></h2>
            <span class="price">34,00 €</span>
          </div>
          <p class="class-description">Primera fila y más espacio</p>
          <p class="class-features">Emarque prioritario + 2 piezas de equipaje a bordo</p>
        </div>
  
        <!-- Seat Map -->
        <div class="seat-map">
          <!-- Row 1 -->
          <div class="seat-row">
            <div class="left-seats">
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
            </div>
            <div class="row-number">1</div>
            <div class="right-seats">
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
            </div>
          </div>
  
          <!-- Row 2 -->
          <div class="seat-row">
            <div class="left-seats">
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat available" @click="selectSeat('1C')">13,00</div>
            </div>
            <div class="row-number">1</div>
            <div class="right-seats">
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
            </div>
          </div>
  
          <!-- Row 3 -->
          <div class="seat-row">
            <div class="left-seats">
              <div class="seat available" @click="selectSeat('2A')">13,00</div>
              <div class="seat available" @click="selectSeat('2B')">13,00</div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
            </div>
            <div class="row-number">2</div>
            <div class="right-seats">
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat available" @click="selectSeat('2F')">13,00</div>
            </div>
          </div>
  
          <!-- Row 4 -->
          <div class="seat-row">
            <div class="left-seats">
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
            </div>
            <div class="row-number">3</div>
            <div class="right-seats">
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat available" @click="selectSeat('3F')">13,00</div>
            </div>
          </div>
  
          <!-- Row 5 -->
          <div class="seat-row">
            <div class="left-seats">
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
            </div>
            <div class="row-number">4</div>
            <div class="right-seats">
              <div class="seat available" @click="selectSeat('4D')">13,00</div>
              <div class="seat available" @click="selectSeat('4E')">13,00</div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
            </div>
          </div>
  
          <!-- Additional rows would continue here -->
          <!-- Row 8 (example of a row with multiple available seats) -->
          <div class="seat-row">
            <div class="left-seats">
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat available" @click="selectSeat('8C')">13,00</div>
            </div>
            <div class="row-number">8</div>
            <div class="right-seats">
              <div class="seat available" @click="selectSeat('8D')">13,00</div>
              <div class="seat available" @click="selectSeat('8E')">13,00</div>
              <div class="seat available" @click="selectSeat('8F')">13,00</div>
            </div>
          </div>

          <div class="seat-row">
            <div class="left-seats">
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat available" @click="selectSeat('8C')">13,00</div>
            </div>
            <div class="row-number">9</div>
            <div class="right-seats">
              <div class="seat available" @click="selectSeat('8D')">13,00</div>
              <div class="seat available" @click="selectSeat('8E')">13,00</div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
            </div>
          </div>
        </div>

        <div class="seat-row">
            <div class="left-seats">
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat available" @click="selectSeat('8C')">13,00</div>
            </div>
            <div class="row-number">10</div>
            <div class="right-seats">
              <div class="seat available" @click="selectSeat('8D')">13,00</div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
            </div>
          </div>

          <div class="seat-row">
            <div class="left-seats">
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
            </div>
            <div class="row-number">11</div>
            <div class="right-seats">
              <div class="seat available" @click="selectSeat('8D')">13,00</div>
              <div class="seat available" @click="selectSeat('8E')">13,00</div>
              <div class="seat available" @click="selectSeat('8F')">13,00</div>
            </div>
          </div>

          <div class="seat-row">
            <div class="left-seats">
              <div class="seat available" @click="selectSeat('8C')">13,00</div>
              <div class="seat available" @click="selectSeat('8C')">13,00</div>
              <div class="seat available" @click="selectSeat('8C')">13,00</div>
            </div>
            <div class="row-number">12</div>
            <div class="right-seats">
              <div class="seat available" @click="selectSeat('8D')">13,00</div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
            </div>
          </div>

          <div class="seat-row">
            <div class="left-seats">
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat available" @click="selectSeat('8C')">13,00</div>
            </div>
            <div class="row-number">13</div>
            <div class="right-seats">
              <div class="seat available" @click="selectSeat('8D')">13,00</div>
              <div class="seat unavailable"><ion-icon :icon="close"></ion-icon></div>
              <div class="seat available" @click="selectSeat('8F')">13,00</div>
            </div>
          </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { 
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
    IonButton, IonButtons, IonBackButton, IonIcon
  } from '@ionic/vue';
  import { person, close } from 'ionicons/icons';
  
  export default defineComponent({
    name: 'SeatSelectionView',
    components: {
      IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
      IonButton, IonButtons, IonBackButton, IonIcon
    },
    setup() {
      const selectedSeat = ref('');
      const router = useRouter();

      const selectSeat = (seatId: string) => {
        selectedSeat.value = seatId;
        console.log(`Selected seat: ${seatId}`);
        router.push('/payment');
      };
      
      return {
        selectedSeat,
        selectSeat,
        person,
        close
      };
    }
  });
  </script>
  
  <style scoped>
  ion-toolbar {
    --background: white;
    --border-color: #e0e0e0;
  }

  .seat.available {
  transition: transform 0.2s ease-in-out; 
}

.seat.available:hover {
  --transform: scale(1.2);
}

  
  .cancel-button {
    color: #777;
    font-weight: normal;
  }
  
  .passenger-info {
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    padding: 12px;
    margin: 0 -16px;
  }
  
  .person-icon {
    font-size: 24px;
    margin-right: 12px;
  }
  
  .seat-map-header {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }
  
  .left-seats, .right-seats {
    display: flex;
    width: 40%;
    justify-content: space-around;
  }
  
  .row-number {
    width: 20%;
    text-align: center;
    font-weight: bold;
  }
  
  .seat-letter {
    width: 30px;
    text-align: center;
    font-weight: bold;
  }
  
  .seat-class {
    margin-bottom: 20px;
  }
  
  .class-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .class-header h2 {
    display: flex;
    align-items: center;
    margin: 0;
    font-size: 18px;
  }
  
  .yellow-dot {
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: #ffeb3b;
    border-radius: 50%;
    margin-left: 8px;
  }
  
  .price {
    font-weight: bold;
    font-size: 18px;
  }
  
  .class-description {
    margin: 4px 0;
    color: #666;
  }
  
  .class-features {
    margin: 4px 0;
    color: #666;
  }
  
  .seat-map {
    margin-top: 20px;
  }
  
  .seat-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  
  .seat {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin: 0 4px;
  }
  
  .unavailable {
    background-color: #9e9e9e;
    color: #fff;
  }
  
  .available {
    background-color: #52ac97;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  /* Hover animation for available seats */
  .available:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #3d8a78;
  }
  
  /* Active/pressed state */
  .available:active {
    transform: scale(0.95);
    background-color: #2d6a5c;
  }
  
  ion-content {
    --background: white;
  }
  </style>