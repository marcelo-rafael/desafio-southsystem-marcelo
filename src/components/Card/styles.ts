import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: var(--background-6);
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;

  section.body {
    padding: 3rem;

    h2 {
      color: var(--text-color-1);
      text-align: center;
    }

    img {
      width: 40rem;
      height: 30rem;
      margin-top:2rem;
      border-radius: 0.5rem;
    }
  }

  section.footer {
    display: flex;
    justify-content: center;

    padding: 2rem 3rem;
    background: var(--background-6);
    border-radius: 0 0 0.8rem 0.8rem;

    div.icon-container {
      display: flex;

      button {
        background: var(--background-7);
        padding: 1rem;
        border-radius: 0.8rem;
        display: flex;
        border: none;
        transition: background-color 0.2s;

        &:hover {
          background: ${shade(0.2, '#e4e4eb')};
        }

        & + button {
          margin-left: 1rem;
        }
      }
    }
  }
`;
