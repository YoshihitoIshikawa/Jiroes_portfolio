import '@/styles/globals.css';
import Head from 'next/head';
import { Auth0Provider } from '@auth0/auth0-react';


export default function App({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={process.env["NEXT_PUBLIC_AUTH0_DOMAIN"]}
      clientId={process.env["NEXT_PUBLIC_AUTH0_CLIENT_ID"]}
      audience={process.env["NEXT_PUBLIC_AUTH0_AUDIENCE"]}
      authorizationParams={{
        redirect_uri: `${process.env["NEXT_PUBLIC_BASE_URL"]}`
      }}
    >
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Auth0Provider>
  )
}
