import './style.css'
import App from './App.vue'
import router from './router'

import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from './lib/apollo'

createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
}).use(router).mount("#app")