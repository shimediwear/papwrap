import Head from 'next/head'
import { Inter } from 'next/font/google'

import Hero from '@/src/Hero';
import Features from '@/src/Features';
import Features2 from '@/src/Features2';
import Contact from '@/src/Contact';
import Testimonials from '@/src/Testimonials'
import Products from '@/src/Products';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Pap Wrap - Food Wrapping Paper</title>
        <meta name="description" content="Healthier way of wrapping food. Pap Wrap US FDA Approved Food Wrapping Paper. A multi purpose food wrapping paper." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Pap Wrap - Food Wrapping Paper" />
        <meta property="og:site_name" content="Pap Wrap" />
        <meta property="og:url" content="https://www.papwrap.in" />
        <meta property="og:description" content="Healthier way of wrapping food. Pap Wrap US FDA Approved Food Wrapping Paper. A multi purpose food wrapping paper." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="https://www.papwrap.in/papwrap1.jpg" />
      </Head>
      <main>
        <Hero />
        <Features />
        <Features2 />
        <Products />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
}
