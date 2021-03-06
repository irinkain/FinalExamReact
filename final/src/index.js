/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'https://api.graphql.jobs/'
  }),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
