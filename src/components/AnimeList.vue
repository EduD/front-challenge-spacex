<template>
  <div>
    <div v-if="loading">
      <h3>Carregando...</h3>
    </div>
    <div v-if="error">Erro: {{ error.message }}</div>
    <table class="table table-hover" v-if="!loading && !error">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Episodes</th>
          <th scope="col">Imagem</th>
        </tr>
      </thead>
      <tbody v-for="anime in animes" :key="anime.id">
        <tr class="table-active">
          <th scope="row">{{ anime.title.romaji }}</th>
          <td>{{ anime.episodes }}</td>
          <td><img :src="anime.coverImage.medium" alt="Anime Cover" /></td>
          <td><router-link :to="{ name: 'AnimeDetail', params: { id: anime.id } }"
              class="btn btn-dark">Details</router-link></td>
        </tr>
      </tbody>
    </table>
    
  </div>

</template>

<script>
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import { ref, watch } from 'vue';

const getAnime = (page, perPage) => {
  return gql`
      query {
        Page(page: ${page}, perPage: ${perPage}){
          media(type: ANIME) {
            id
            title {
              romaji
            }
            episodes
            coverImage {
              medium
            }
          }
        }
      }
    `};
export default {
  name: 'AnimeList',


  setup() {
    const { result, loading, error } = useQuery(getAnime(1, 10))

    const animes = ref([])

    watch(result, (newValue) => {
      if (newValue && newValue.Page) {
        animes.value = newValue.Page.media;
      }
    })

    return {
      animes,
      loading,
      error,
    }
  },
}
</script>