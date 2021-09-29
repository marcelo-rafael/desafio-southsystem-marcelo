import styled from "styled-components";

export const Container = styled.div`
  background: var(--background-1);
  width: 100%;
  height: 100vh;
  border-radius: 0.5rem;
  display: flex;
  place-content: center;

  section.body {
    padding: 5rem;
    justify-content: center;
    align-items: center;
    display: flex;

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
      margin-bottom: 2rem;
    }
  }
`

