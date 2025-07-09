import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head"; // ✅ Correct import

export default function App({ Component, pageProps }: AppProps) {
  return ( // ✅ Ensure JSX is returned
    <>
      <Head>
        <title>Ansica - ASCII Art Generator</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
