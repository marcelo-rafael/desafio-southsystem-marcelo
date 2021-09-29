import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    /*========== Colors ==========*/
    --background-1: #312e38;
    --background-2: #232129;
    --background-4: #ff9000;
    --background-5: #c53030;
    --background-6: #f4ede8;
    --background-7: #e4e4eb;

    --border-color-1: #232129;
    --border-color-2: #c53030;
    --border-color-3: #ff9000;

    --text-color-1: #312e38;
    --text-color-2: #ff9000;
    --text-color-3: #fff;
    --text-color-4: #f4ede8;
    --text-color-5: #666360;

    /*========== Font and typography ==========*/
    --font-family: 'Roboto Slab', serif;

    --text-font-size: 1.6rem;
    --text-font-size-small: 1.4rem;
    --h1-font-size: 3.6rem;

    /*========== Font weight ==========*/
    --font-regular: 400;
    --font-medium: 500;
    --font-large: 600
  }

  /*========== Base ==========*/
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: var(--background-1);
    color: var(--text-color-3);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: var(--font-family);
    font-size: var(--text-font-size);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: var(--font-medium);
  }

  button {
    cursor: pointer;
  }
`
