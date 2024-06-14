

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Rick and Morthy</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Rick and Morty</ion-title>
          <p style="padding-left: 4px;">Personajes {{ getCharacters.length }} </p>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-item 
        v-for="(row,k) in getCharacters" 
        :key="k"
        :detail="false"
        class="list-item"
        >
          <ion-label>
            <div style="display:flex; align-items: center; justify-content: space-between; gap: 4px;">
              <div style="display: flex; align-items: center; gap: 4px;">
                <IonImg 
                :src="row.image"
                :style="{height: '50px',width: '50px'}"
                />
                <div style="display: flex; flex-direction: column;">
                  <p>{{ row.name }}</p>
                  <p>{{ row.species }}</p>
                </div>
              </div>
              <div>
                <IonButton color="primary" @click="onEdit(row)">
                  edit
                </IonButton>
                <IonButton color="danger" @click="onEliminar(row.id)" >
                  Eliminar
                </IonButton>
              </div>
            </div>
          </ion-label>
        </ion-item>
      </ion-list>
      <!-- <ion-list>
        <MessageListItem v-for="message in messages" :key="message.id" :message="message" />
      </ion-list> -->
      <ion-fab vertical="bottom" horizontal="end">
      <ion-fab-button @click="onClickAdd">
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  onIonViewWillEnter,
  IonItem,
  IonLabel,
  IonImg,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButton,
  alertController,
} from '@ionic/vue';
import {add} from  'ionicons/icons'
import {useRouter} from 'vue-router'
import { useRickAndMorty, type ICharacter } from '@/composables/useRickAndMorty';

const refresh = (ev: CustomEvent) => {
  fetchCharacters().then(()=>{
    ev.detail.complete();
  })
};
const { fetchCharacters, getCharacters } = useRickAndMorty()

const router = useRouter()

const onClickAdd = async ():Promise<void>=>{
  await router.push({name: 'personaje.crear'})
}
const onEdit = async (personaje:ICharacter):Promise<void>=>{
  await router.push({
    path: '/personaje/crear',
    query:{
      personajeRaw: JSON.stringify(personaje)
    }
  })
}
const onEliminar = async (id:string):Promise<void>=>{
  console.log(`eliminado el registro... ${id}`)
  const alert = await alertController.create({
    header: 'Mensaje',
    message: 'eliminado correctamente'
  })
  await alert.present()
  await fetchCharacters()
}
onIonViewWillEnter(() => {
  console.log('onIonViewWillEnter....')
  fetchCharacters()
})

</script>
