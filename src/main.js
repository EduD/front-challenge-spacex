import { createApp } from 'vue';
import App from './App.vue';
import { provideApolloClient } from './apollo';
import routes from '@/routes/routes'

const app = createApp(App);

provideApolloClient(app);

app.use(routes).mount('#app');