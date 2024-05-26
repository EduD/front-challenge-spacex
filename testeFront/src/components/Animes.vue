<template>
  <div class="animes">
    <div v-if="!selectedAnime" v-for="anime in animes" :key="anime.siteUrl"
      @click="exibirSelecionado(anime)">
      <img :src="anime.coverImage.large" />
    </div>
  </div>

  <DetalhesAnimes v-if="selectedAnime" :anime="selectedAnime" @voltar="listarAnimes" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useQuery, provideApolloClient } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'
import { apolloClient } from '../main'
import router from '../router'
import DetalhesAnimes from './DetalhesAnimes.vue'

provideApolloClient(apolloClient)

const animes = ref<{
  title: { english: string };
  coverImage: { large: string };
  siteUrl: string;
  description: string;
}[]>([])

const selectedAnime = ref<{
  title: { english: string };
  coverImage: { large: string };
  siteUrl: string;
  description: string;
} | null>(null)

const { onResult } = useQuery(
  gql`
      query {
        Page {
          media {
            title {
              english
            }
            coverImage {
              large
            }
            siteUrl
            description
          }
        }
      }
    `
)

onResult((result) => {
  animes.value = result.data.Page.media
})

const exibirSelecionado = async (anime: any) => {
  await router.push({ name: 'DetalhesAnimes', params: { id: anime.siteUrl } })
  selectedAnime.value = anime
}


const listarAnimes = () => {
  selectedAnime.value = null
}

watch(useRoute(), () => {
  selectedAnime.value = null
})
</script>

<style scoped>
.animes {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: auto;
  text-align: center;
  margin-top: 2vw;
  margin-bottom: 3vw;
}

.animes img {
  width: 80%;
  height: 25vw;
  object-fit: cover;
  margin-top: 2vw;
  border-radius: 1vw;
  transition: 0.3s;
  border: solid 0.3vw rgba(245, 222, 179, 0.347);
  cursor: pointer;
}

.animes img:hover {
  transform: scale(1.1);
  border: solid 0.3vw green;
}
</style>