import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Layout } from './components/Layout';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <div>Hello world</div>
      </Layout>
    </ApolloProvider>
  );
};
export default App;
