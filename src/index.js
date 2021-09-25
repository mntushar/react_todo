import React from 'react';
import ReactDOM from 'react-dom';
import './appTodo.scss';
import './appTodo.css';
import App from './appTodo';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";


//Apollo Cline configurations
const client = new ApolloClient({
  uri: 'http://127.0.0.1:8000/graphql/',
  cache: new InMemoryCache()
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </ApolloProvider>,
  document.getElementById('root')
);
