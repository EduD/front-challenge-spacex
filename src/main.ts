import { createApp, h } from 'vue'
import App from './App.vue'
import { ApolloClients } from '@vue/apollo-composable'
import router from './router'
import client from './services/client'

const app = createApp({
  provide: {
    [ApolloClients]: client,
  },
  render: () => h(App),
})

app.use(router)

app.mount('#app')
