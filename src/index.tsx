import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';

import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {BrowserRouter} from 'react-router-dom';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache({
      typePolicies: {
          Query: {
              fields: {
                  repository: {
                      merge(existing, incoming) {
                          return incoming;
                      }
                  },
              }
          }
      }
  }),

});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <ApolloProvider client={client}>
              <App/>
          </ApolloProvider>
      </BrowserRouter>
  </React.StrictMode>,
);