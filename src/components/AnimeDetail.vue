<template>
  <div class="card mb-3">
    <h3 class="card-header" v-if="anime.title">{{ anime.title.romaji }}</h3>
    <img v-if="anime.coverImage" :src="anime.coverImage.large" alt="Capa do Anime">
    <div class="card-body">
      <p class="card-text" v-if="anime.description">{{ anime.description }} </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-if="anime.episodes"> <span>Episodes :</span> {{ anime.episodes }}</li>
      <li class="list-group-item" v-if="anime.status"> <span>Status:</span> {{ anime.status }}</li>
      <li class="list-group-item" v-if="anime.genres"> <span>Gender:</span> {{ anime.genres }}</li>
      <li class="btn btn-dark">
        <a class="nav-link active" href="/">Return
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router'

const getAnime = (idAnime) => {
  return gql`
      query {
        Page {
          media(id:${idAnime} type: ANIME) {
            id
            title {
              romaji
            }
            episodes
            status
            genres
            description
            coverImage {
              large
    
            }
          }
        }
      }
    `};
export default {
  name: 'AnimeDetail',


  setup() {
    const route = useRoute();
    const id = parseInt(route.params.id, 10)
    const { result, loading, error } = useQuery(getAnime(id));
    const anime = ref([]);

    watch(result, (newValue) => {
      if (newValue && newValue.Page) {
        anime.value = newValue.Page.media[0];
      }
    });

    return {
      anime,
      loading,
      error,
    };
  },
};
</script>

<style>
img {
  border-radius: 8px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 80%;
  height: auto;
}

span{
  font-weight: bold;
}
</style>