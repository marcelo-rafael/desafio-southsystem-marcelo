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

    /*========== Typography ==========*/
    --font-family: 'Roboto Slab', serif;

    /*========== Font size for large devices ==========*/
    --text-font-size-small: 1.4rem;
    --text-font-size: 1.6rem;
    --h1-font-size: 3.6rem;

    /*========== Font weight ==========*/
    --font-regular: 400;
    --font-medium: 500;
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

  h1, h2, h3 {
    font-weight: var(--font-medium);
  }

  button {
    cursor: pointer;
  }

  .react-modal-overlay {
    background: #121214e6;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background-7);
    color: var(--text-color-1);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }
/*
  @media(max-width: 424px) {
    .react-modal-content {
      width: 100%;
    max-width: 476px;
    padding: 2rem;
    position: relative;
    border-radius: 0.25rem;

  }
  }} */


  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    color: var(--text-color-1);
    background: transparent;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`
