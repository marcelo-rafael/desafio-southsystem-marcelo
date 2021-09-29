import styled from 'styled-components';
import { shade } from 'polished';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  padding: 4.8rem 4.0rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: var(--font-large);
    font-size: var(--h1-font-size);
    line-height: 3.6rem;
    margin-bottom: 4rem;
  }

  button {
    margin-top: 4.8rem;
    align-self: flex-end;
  }

  button {
    font-weight: 600;
    border-radius: 0.8rem;
    border: 0;
    background: var(--background-4);
    color: var(--text-color-4);
    transition: background-color 0.2s;

    display: flex;
    flex-direction: row;
    align-items: center;

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
`;
