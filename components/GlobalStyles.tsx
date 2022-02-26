import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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
