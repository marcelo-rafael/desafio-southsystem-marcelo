import { shade } from 'polished';
import styled from "styled-components";

export const Container = styled.div`
  background: var(--background-1);
  width: 100%;
  height: 100vh;

  div.content {
    max-width: 1440px;
    display: flex;
    place-content: center;
  }

  section.body {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;

    img {
      width: 60rem;
      height: 50rem;
      border-radius: 0.5rem;
      margin: 2rem;
    }
  }

  section.footer {
    display: flex;

    flex-direction: column;
    justify-content: center;
    padding: 2rem 3rem;

    h2 {
      color: var(--text-color-4);
      margin-bottom: 2rem;
    }

    p {
      color: var(--text-color-4);
      font-size: var(--text-font-size);
      margin-bottom: 3rem;
    }

    button {
          font-weight: var(--font-medium);
          border-radius: 0.8rem;
          border: 0;
          background: var(--background-4);
          color: var(--text-color-4);

          display: flex;
          justify-content: space-between;
          align-items: center;


          transition: background-color 0.2s;

          .text {
            padding: 1.6rem 2.4rem;
          }

          .icon {
            padding: 1.6rem 2.4rem;
            background: var(--background-4);
            border-radius: 0 0.8rem 0.8rem 0;
          }

          &:hover {
            background: ${shade(0.2, '#ff9000')};
          }
        }
  }

  @media(max-width: 768px) {
    div.content {
      display: flex;
      flex-direction: column;
  }

    section.footer {
      text-align: center
    }

    section.footer > button {
      width: 20rem;
      align-self: center;
    }
  }

  @media(max-width: 425px) {
    section.body img {
      width: 35rem;
      height: 30rem;
      border-radius: 0.5rem;
      margin: 2rem;
      }
    }


  @media(max-width: 375px) {
    section.body img {
      width: 30rem;
      height: 20rem;
      border-radius: 0.5rem;
      margin: 2rem;
    }

    section.footer h2 {
      font-size: var(--text-font-size);
    }

    section.footer p {
      font-size: var(--text-font-size-small);
    }
  }
`

