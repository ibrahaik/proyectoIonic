<template>
    <ion-page>
        <ion-content>

        <div class="logo-container">
          <img src="/boyling.png" alt="¡Boyling!" class="logo"/>
        </div>
            
        <p class="custom-text">O regístrate <router-link to="/register" class="link">aquí</router-link></p>
        <div class="form-container"> 
    <div class="contenedor">        
    <ion-item class="custom-input">
    <ion-input placeholder="Usuario o correo"></ion-input>
    </ion-item>

    <ion-item class="custom-input">
    <ion-input type="password" placeholder="Contraseña"></ion-input>
    </ion-item>
     </div>

     <ion-button expand="block" @click="goToHome" class="boton">
      ENTRAR
    </ion-button>
          </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToHome = () => {
  router.push('/home').then(() => {
    router.go(0); // Recarga la página
  }).catch(err => console.error("Error en navegación:", err));
};

</script>

<style scoped>


.custom-text {
  margin-top: 60%;
  margin-left: 40px;
  font-size: 14px;
}
.custom-input {
  --background: #c5c4c4; /* Gris claro */
  --border-radius: 10px;
  --padding-start: 15px;
  --inner-padding-end: 15px;
}

.custom-input ion-input {
  color: #2b2929; /* Letras en gris */
}

.login-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: white; /* O el color de tu app */
}

.logo-container {
  margin-bottom: 20px;
  text-align: center;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 15px; /* Ajusta según sea necesario */
}

.contenedor {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 80%;
}


.logo {
  width: 200px; /* Ajusta según tu diseño */
  height: auto;
}

.boton {
  --background: #FF0;
  margin-top: 10px;
  color: black;
  width: 50%;
  --border-radius: 20px;
}



</style>