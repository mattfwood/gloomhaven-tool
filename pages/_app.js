import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
// import NProgress from 'nprogress';
// import Router from 'next/router';
import Head from 'next/head';
// import { createGlobalStyle } from 'styled-components';

import App from 'next/app';

// show nprogress loading bar on route change
// Router.events.on('routeChangeStart', url => {
//   console.log(`Loading: ${url}`);
//   NProgress.start();
// });

// Router.events.on('routeChangeComplete', () => NProgress.done());
// Router.events.on('routeChangeError', () => NProgress.done());

// const GlobalStyle = createGlobalStyle`
//   .slick-next:before, .slick-prev:before {
//     color: grey;
//   }

//   .slick-next {
//     right: -20px;
//   }

//   .slick-prev {
//     left: -20px;
//   }

//   .thing-text-content p {
//     margin-bottom: 10px;
//   }

//   .thing-card {
//     position: relative;
//     transition: 180ms all ease;
//   }

//   .thing-card:hover {
//     transform: translateY(-2px);
//   }
// `;

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        {/* <Head>
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        </Head> */}
        <ThemeProvider>
          <CSSReset />
          {/* <GlobalStyle /> */}
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
