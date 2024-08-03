import './style.css'
import App from './App.vue'

import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from './lib/apollo'

createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
}).mount("#app")