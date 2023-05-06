// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/src/Navbar';
import Footer from '@/src/Footer';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>

      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  )
}

export default MyApp;