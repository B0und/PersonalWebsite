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

        {/*  old icon format */}
        <link rel="icon" sizes="any" href="favicon.ico" />
        {/* svg icon */}
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        {/* apple icon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://wikispeedrun.org/apple-touch-icon.png"
        />

        <link rel="manifest" href="https://wikispeedrun.org/site.webmanifest" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
