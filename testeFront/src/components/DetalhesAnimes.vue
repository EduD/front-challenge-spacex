<template>
    <div class="cardAnime">
        <div class="infoAnimes">
            <h1>{{ anime.title.english }}</h1>
            <img :src="anime.coverImage.large" />
            <div class="resumo">
                <p v-html="anime.description"></p>
                <button @click="maisInfo(anime.siteUrl)">More Info</button>
                <button @click="voltarMenu">Home</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter  } from 'vue-router'

defineProps<{
    anime: {
        title: { english: string };
        coverImage: { large: string };
        siteUrl: string;
        description: string;
    };
}>()

const maisInfo = (url: string) => {
    window.open(url, '_blank'); 
};

const router = useRouter()

const voltarMenu = () => {
    router.push({ name: 'Home' });
}

</script>

<style scoped>
.cardAnime {
    width: 80%;
    margin: 0 auto; 
    margin-bottom: 2vw;
    border-radius: 2vw;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
}

.infoAnime {
    text-align: center;
}

.cardAnime img {
    border-radius: 1vw;
    transition: 0.3s;
    border: solid 0.3vw rgba(245, 222, 179, 0.347);
    width: 20vw;
}

.resumo{
    background: linear-gradient(to right, #57199e, #19599e, #57199e);
    border: 0.1vw solid wheat;
    border-radius: 1vw;
}

.resumo button {
    color: wheat;
    font-size: 2vw;
    background: linear-gradient(to right, #19599e, #57199e);
    width: 20%;
    margin: 0 auto;
    border-radius: 1vw;
    cursor: pointer;
    margin-left: 1vw;
    margin-bottom: 1vw;
    border: solid 0.1vw wheat;
}


.resumo button:hover {
    transform: scale(1.07);
    background: linear-gradient(to right, #222324, #5a11ad);
}

.resumo p {
    color: wheat;
    font-size: 1vw;
    width: 90%;
    margin: 0 auto;
    margin-top: 2vw;
    margin-bottom: 1vw;
}
  
.cardAnime h1{
    color: wheat;
    border: solid 0.1vw wheat;
    font-size: 3vw;
    background: linear-gradient(to right, #4271a0, #5a11ad);
    width: 50%;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 1vw;
    border-radius: 1vw;
}

</style>
