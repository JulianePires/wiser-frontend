import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { storeWrapper } from "../../types/store";

import GlobalStyle from '../styles/global'
import { theme } from '../styles/theme'


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Wiser Form - Challenge FrontEnd</title>
        <meta name="title" content={'Wiser Form'} />
        <meta name="description" content={'Developed during the wiser proccess'} />

        <meta property="og:type" content="website" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default storeWrapper.withRedux(MyApp)
