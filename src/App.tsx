//Apollo client features (exec, provider, memoryCache)
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

//Components
import { Grid, Layout } from "./components";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Grid />
      </Layout>
    </ApolloProvider>
  );
};
export default App;
