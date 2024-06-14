<template>
  <div>
    <IonInput label="Nombre" v-model="name" placeholder="rick"></IonInput>
    <IonInput label="specie" v-model="specie" placeholder="morty"></IonInput>
    <IonButton expand="block" @click="onClickGuardar" >Guardar</IonButton>
  </div>
</template>
<script setup lang="ts">
import { ICharacter } from '@/composables/useRickAndMorty';
import {IonInput, IonButton, alertController} from '@ionic/vue'
import {onMounted, ref} from 'vue'
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
defineOptions({
  name: 'personajeForm'
})

const name = ref<string>('')
const specie = ref<string>('')

const onClickGuardar = async ():Promise<void>=>{
  if(!name.value){
    await launchMessage('nombre requerido')
    return;
  }
  if(!specie.value){
    await launchMessage('especie requerido')
    return;
  }

  await launchMessage('personaje creado')
  await router.back()
}
const route = useRoute()
const launchMessage = async (message:string)=>{
  const alert = await alertController.create({
    header: 'Mensaje',
    message,
  })
  await alert.present()
}
const isCreate = ref(true)
onMounted(()=>{
  const personajeRaw = route.query.personajeRaw
  if(personajeRaw){
    isCreate.value = false
    const personaje = JSON.parse(personajeRaw.toString()) as ICharacter
    name.value = personaje.name
    specie.value = personaje.species
  }
})
</script>