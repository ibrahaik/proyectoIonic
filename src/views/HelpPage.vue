<template>
    <ion-page>
      <ion-header>
        <ion-toolbar class="yellow-header">
          <ion-buttons slot="start">
            <ion-back-button text="" default-href="/"></ion-back-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <!-- Login Card -->
        <div class="login-card">
          <div class="login-info">
            <ion-icon :icon="informationCircle" class="info-icon"></ion-icon>
            <span class="info-text">Inicia sesión para obtener una ayuda personalizada</span>
          </div>
          
          <ion-item class="custom-input">
            <ion-input v-model="email" placeholder="email o número de teléfono" type="text"></ion-input>
          </ion-item>
          
          <ion-item class="custom-input">
            <ion-input v-model="password" placeholder="contraseña" type="password"></ion-input>
          </ion-item>
          
          <ion-button expand="block" class="access-button">
            ACCEDER
            <ion-icon :icon="arrowForward" slot="end"></ion-icon>
          </ion-button>
        </div>
  
        <!-- FAQ Section -->
        <h2 class="faq-title">PREGUNTAS FREQ</h2>
        
        <!-- FAQ Carousel -->
        <div class="carousel-container">
          <swiper
            :slides-per-view="1"
            :space-between="20"
            :pagination="{ clickable: true }"
            @swiper="setSwiperRef"
          >
            <swiper-slide>
              <div class="faq-card">
                <h3 class="faq-question">¿Quieres cancelar tu vuelo?</h3>
                <p class="faq-answer">
                  Puedes cancelar tu vuelo fácilmente desde la sección de "Gestión de reservas" ingresando tu código y correo electrónico. Consulta las políticas de reembolso y créditos antes de proceder.
                </p>
              </div>
            </swiper-slide>
            
            <swiper-slide>
              <div class="faq-card">
                <h3 class="faq-question">¿Cómo modificar mi reserva?</h3>
                <p class="faq-answer">
                  Puedes modificar los detalles de tu reserva accediendo a la sección "Gestión de reservas" con tu código de reserva y correo electrónico. Ten en cuenta que pueden aplicarse cargos por cambios.
                </p>
              </div>
            </swiper-slide>
            
            <swiper-slide>
              <div class="faq-card">
                <h3 class="faq-question">¿Cuándo recibiré mi reembolso?</h3>
                <p class="faq-answer">
                  Los reembolsos suelen procesarse en un plazo de 7-14 días hábiles, dependiendo de tu método de pago y entidad bancaria. Puedes consultar el estado de tu reembolso en la sección "Mis reembolsos".
                </p>
              </div>
            </swiper-slide>
          </swiper>
          
          <!-- Custom Pagination Indicator -->
          <div class="carousel-pagination">
            <div 
              v-for="(_, index) in 3" 
              :key="index" 
              :class="['pagination-dot', { active: currentSlide === index }]"
              @click="goToSlide(index)"
            ></div>
          </div>
        </div>
  
        <!-- Logo -->
        <div class="logo-container">
          <div class="logo">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BOYLING_2C_IBRAHIM-JoU6LRkEBKeRGfXizX7jwYgP1Vev43.png" alt="Boyling logo" class="logo-image" />
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { 
    IonPage, IonHeader, IonToolbar, IonContent,
    IonButtons, IonBackButton, IonIcon, IonButton,
    IonItem, IonInput
  } from '@ionic/vue';
  import { informationCircle, arrowForward } from 'ionicons/icons';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  export default defineComponent({
    name: 'HelpPageView',
    components: {
      IonPage, IonHeader, IonToolbar, IonContent,
      IonButtons, IonBackButton, IonIcon, IonButton,
      IonItem, IonInput, Swiper, SwiperSlide
    },
    setup() {
      const email = ref('');
      const password = ref('');
      const swiperRef = ref(null);
      const currentSlide = ref(0);
      
      const setSwiperRef = (swiper) => {
        swiperRef.value = swiper;
        swiper.on('slideChange', () => {
          currentSlide.value = swiper.activeIndex;
        });
      };
      
      const goToSlide = (index) => {
        if (swiperRef.value) {
          swiperRef.value.slideTo(index);
        }
      };
      
      return {
        email,
        password,
        informationCircle,
        arrowForward,
        setSwiperRef,
        currentSlide,
        goToSlide
      };
    }
  });
  </script>
  
  <style scoped>
  .yellow-header {
    --background: #ffeb3b;
    --border-color: transparent;
  }
  
  .login-card {
    border: 1px solid #e0e0e0;
    border-radius: 16px;
    padding: 16px;
    margin: 16px;
  }
  
  .login-info {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
  
  .info-icon {
    color: #1976d2;
    font-size: 24px;
    margin-right: 8px;
  }
  
  .info-text {
    color: #1976d2;
    font-weight: 500;
  }
  
  .custom-input {
    --background: transparent;
    --border-color: #e0e0e0;
    --border-radius: 8px;
    --border-width: 1px;
    --padding-start: 12px;
    margin-bottom: 16px;
  }
  
  .access-button {
    --background: #ffeb3b;
    --color: black;
    --border-radius: 24px;
    font-weight: bold;
    margin: 8px auto;
    max-width: 200px;
  }
  
  .faq-title {
    color: #9e9e9e;
    font-size: 24px;
    font-weight: bold;
    margin: 24px 16px 16px;
  }
  
  .carousel-container {
    position: relative;
    padding-bottom: 40px;
  }
  
  .faq-card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    height: 100%;
    min-height: 200px;
  }
  
  .faq-question {
    font-size: 20px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 16px;
  }
  
  .faq-answer {
    color: #757575;
    line-height: 1.5;
  }
  
  .carousel-pagination {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 10px;
    width: 100%;
  }
  
  .pagination-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #e0e0e0;
    margin: 0 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .pagination-dot.active {
    background-color: #ffeb3b;
    width: 12px;
    height: 12px;
  }
  
  .logo-container {
    display: flex;
    justify-content: center;
    margin: 32px 0;
  }
  
  .logo {
    width: 80px;
    height: 80px;
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
  
  /* Swiper custom styles */
  :deep(.swiper) {
    width: 100%;
    height: 100%;
  }
  
  :deep(.swiper-slide) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  :deep(.swiper-pagination) {
    display: none; /* Hide default pagination */
  }
  </style>