<template>
<Headers title="Animes"/>
<router-view></router-view>
</template>

<script>
import Headers from './components/Headers.vue';



export default {
  name: 'App',
  components: {
    Headers
  }
}
</script>


