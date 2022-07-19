import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";
import GlobalStyles from "../components/GlobalStyles";
import * as gtag from "../helpers/gtag";

function MyApp({ Component, pageProps }: AppProps) {
  // FOUC hack
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div style={{ visibility: !mounted ? "hidden" : undefined }}>
      <Head>
        <meta charSet="utf-8" />
        <title>Vlad Moiseenko</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Vlad Moiseenko is a frontend developer based in Moscow. Currently focused on building fascinating web projects and learning new things."
        />
        {/* <!-- general metadata  --> */}
        <meta property="og:title" content="Vlad Moiseenko" />
        <meta
          property="og:description"
          content="Vlad Moiseenko is a frontend developer based in Moscow. Currently focused on building fascinating web projects and learning new things."
        ></meta>
        <meta property="og:image" content="https://www.vladmoiseenko.com/og.png" />
        <meta property="og:image:alt" content="A wikipedia logo with speedrun timer on top of it" />
        <meta property="og:url" content="https://www.vladmoiseenko.com/"></meta>
        <meta property="og:type" content="website"></meta>

        {/* <!-- twitter metadata --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@unbound_dev" />
        <meta name="twitter:url" content="https://www.vladmoiseenko.com/" />
        <meta name="twitter:title" content="Vlad Moiseenko" />
        <meta
          name="twitter:description"
          content="Vlad Moiseenko is a frontend developer based in Moscow. Currently focused on building fascinating web projects and learning new things."
        />
        <meta name="twitter:image" content="https://www.vladmoiseenko.com/og.png" />
        <meta
          name="twitter:image:alt"
          content="A sci-fi-ish light teal card (with cool 45 degree corners) on the darker blue background that says: Vlad Moiseenko."
        />

        {/*  old icon format */}
        <link rel="icon" sizes="any" href="favicon.ico" />
        {/* svg icon */}
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        {/* apple icon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://www.vladmoiseenko.com/apple-touch-icon.png"
        />

        <link rel="manifest" href="https://www.vladmoiseenko.com/site.webmanifest" />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
