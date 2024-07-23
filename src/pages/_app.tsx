import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Barlow } from "next/font/google";
import Head from 'next/head';

const barlow = Barlow({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
    <meta property="og:title" content="shvrk.tsx" />
    <meta property="og:description" content="knowledge is power" />
    <meta property="og:image" content="https://i.imgur.com/07G2O6Q.png" />
    <meta property="og:url" content="http://www.shvrk.surf" />
    <meta property="og:type" content="website" />
    </Head>
    <main className={barlow.className}>
      <Component {...pageProps} />
    </main>
    </>

  );
}
