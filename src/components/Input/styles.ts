import styled from 'styled-components'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  background: var(--background-2);
  border-radius: 1rem;
  border: 0.2rem solid var(--border-color-1);
  padding: 1.6rem;
  width: 100%;
  color: var(--text-color-5);

  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.8rem;
  }

    input {
      flex: 1;
      background: transparent;
      border: 0;
      color: var(--text-color-4);

      &::placeholder {
        color: var(--text-color-5);
      }
    }

    svg {
      margin-right: 1.6rem;
    }

    @media(max-width: 1024px) {
    max-width: 55rem;
  }
`


