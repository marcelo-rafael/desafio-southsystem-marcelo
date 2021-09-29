import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  background: var(--background-1);
  padding: 3rem 0;

  header {
    width: 1280px;

    margin: 0 auto;
    padding: 0 0 16rem;

    display: flex;
    align-items: center;
    justify-content: space-between;


    h1 {
      color: var(--text-color-4);
    }

    nav {
        button {
          font-weight: var(--font-large);
          border-radius: 0.8rem;
          border: 0;
          background: var(--background-4);
          color: var(--text-color-4);

          display: flex;
          flex-direction: row;
          align-items: center;

          transition: background-color 0.2s;

          .text {
            padding: 1.6rem 2.4rem;
          }

          .icon {
            display: flex;
            padding: 1.6rem 1.6rem;
            background: var(--background-4);
            border-radius: 0 0.8rem 0.8rem 0;
            margin: 0 auto;
          }

          &:hover {
            background: ${shade(0.2, '#ff9000')};
          }
        }
    }
  }
`;
