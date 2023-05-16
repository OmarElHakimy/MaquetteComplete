import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'
import Client from '../graphQL/apolloClient';

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <ApolloProvider client={Client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
