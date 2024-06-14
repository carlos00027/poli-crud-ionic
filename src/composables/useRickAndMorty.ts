import axios from "axios"
import { computed, ref } from "vue";

interface IResponse<T> {
  results: T[]
}

interface IEpisode {
  id: number;
  name: string;
  episode: string;
  air_date: string;
}

export interface ICharacter {
  id: number;
  name: string;
  image: string;
  species: string;
}

export const useRickAndMorty = () => {
  const _episodes = ref<IEpisode[]>([])
  const getEpisodes = computed(() => _episodes.value)
  
  const _characters = ref<ICharacter[]>([])
  const getCharacters = computed(()=>_characters.value)

  const fetchEpisodes = async ():Promise<void> => {
    const http = axios.create()
    const { data } = await http.get<IResponse<IEpisode>>(`https://rickandmortyapi.com/api/episode`)
    _episodes.value = data.results
  }

  const fetchCharacters = async ():Promise<void>=>{
    const http = axios.create()
    const {data} = await http.get<IResponse<ICharacter>>('https://rickandmortyapi.com/api/character')
    console.log(data)
    _characters.value = data.results
  }

  return {
    fetchEpisodes,
    fetchCharacters,
    getEpisodes,
    getCharacters,
  }
}

