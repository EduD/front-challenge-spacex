import { createApp, App as VueApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { createApolloProvider } from '@vue/apollo-option'
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client/core'

// Criação do cliente Apollo
export const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache()
})

const app: VueApp = createApp(App)

// Criação do provedor Apollo
const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

// Uso do provedor Apollo no app Vue
app.use(router)
app.use(apolloProvider)
app.mount('#app')