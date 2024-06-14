<template>
  <IonPage>
    <ion-content :fullscreen="true">
      requiere autenticación
      <IonInput label="Usuario" type="email" placeholder="correo@prueba.com" v-model="email"></IonInput>
      <IonInput label="Clave" placeholder="********" v-model="password"></IonInput>
      <IonButton fill="solid" expand="block" @click="onLogin">Iniciar sesión</IonButton>
    </ion-content>
  </IonPage>
</template>
<script setup lang="ts">
import { IonPage, IonContent, IonInput, IonButton, alertController } from '@ionic/vue'
import { useAuth } from '../../composables/useAuth'
import { useRouter } from 'vue-router'
defineOptions({
  name: 'loginPage'
})

const router = useRouter()
const onLogin = async (): Promise<void> => {
  if (isAutenticated(email.value, password.value)) {
    await router.replace({ path: '/home' })
    return;
  }
  const alert = await alertController.create({
    header: 'Mensaje',
    message: 'no fue posible iniciar sesion'
  })
  await alert.present()
}

const {
  email,
  password,
  isAutenticated
} = useAuth()

</script>