import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  background: var(--background-1);

  max-width: 1024px;
  margin: 0 auto;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  display: grid;
  justify-content: center;
  padding: 3rem 40px;


  header {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 40px auto 0;
    /* margin: 0 auto; */
    padding: 0 0 16rem;

    @media(max-width: 768px) {
    position: relative;
  }

  @media(max-width: 425px) {
    flex-direction: column;
    position: relative;

    h1 {
      margin-bottom: 2rem;
    }
  }

    h1 {
      color: var(--text-color-4);
    }

    nav {
      div {
        button {
          font-weight: var(--font-medium);
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
  }
`;
