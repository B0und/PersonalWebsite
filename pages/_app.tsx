import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "../components/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Vlad Moiseenko</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Vlad Moiseenko is a frontend developer based in Moscow. Currently focused on building fascinating web projects and learning new things."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
