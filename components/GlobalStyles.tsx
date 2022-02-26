import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100 900;
    font-display: optional;
    src: url(/fonts/inter-var-latin.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD,U+2192;
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 100 900; 
    font-display: optional;
    src: url(/fonts/montserrat-var-latin.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD,U+2192;
  }

   @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 100 900; 
    font-display: optional;
    src: url(/fonts/roboto-mono-var-latin.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD,U+2192;
  }


  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  html,
  body,
  #root {
    scroll-behavior: smooth;
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  /* Remove built-in form typography styles */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Avoid text overflows */
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  /* Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will float above the app.
  */
  #root,
  #__next {
    isolation: isolate;
  }

  /* GLOBAL STYLES */
  *,
  *:before,
  *:after {
    font-family: 'Inter', sans-serif;
   
  }

  h1,h2,h3,h4,h5 {
    font-family: 'Montserrat', sans-serif;
  }

  html {
    background-color: var(--color-background);
    background-image: linear-gradient(transparent 50%, var(--color-background-darker) 50%);
    background-size: 10px 10px;
    color: #e9e9e9;

    // silence the warning
    --reach-dialog: 1;

    --color-primary: var(--color-blue);
    --color-secondary: var(--color-red);
    --color-border: #919191;
    --color-background : hsl(234, 33.3%, 17.65%);
    --color-background-darker: hsl(234, 33.3%, 17.25%);
    --color-red: #F5656D;
    --color-green: #11ebad;
    --color-blue: #2FDAF4;
    --color-blue-darker: hsl(187.92, 89.954%, 54%);
    --color-backdrop: #00000092;

    --fade-delay: 0.8s;
    --fade-duration: 0.5s;
    --fade-ease: ease-in-out;

    --border-duration: 1s;
    --border-ease: ease-in-out;

    
  }
`;

export default GlobalStyles;
