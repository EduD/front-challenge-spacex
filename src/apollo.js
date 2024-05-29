
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { createHttpLink } from '@apollo/client/link/http';
import { DefaultApolloClient } from '@vue/apollo-composable';

const httpLink = createHttpLink({
  uri: 'https://graphql.anilist.co',
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        Page: {
          merge: true
        },
      },
    },
    Media: {
      fields: {
        title: {
          merge: true
        },
        coverImage: {
          merge: true
        },
      },
    },
  },
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

export function provideApolloClient(app) {
  app.provide(DefaultApolloClient, apolloClient);
}