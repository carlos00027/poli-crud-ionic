<template>
  <IonPage>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Formulario personaje</ion-title>
      </ion-toolbar>
    </ion-header>
    <IonContent>
      <PersonajeForm />
    </IonContent>
  </IonPage>
</template>
<script setup lang="ts">
import {IonPage, IonContent, IonToolbar, IonTitle, IonHeader} from '@ionic/vue'
import PersonajeForm from '@/components/templates/personaje/personajeForm.vue'

</script>