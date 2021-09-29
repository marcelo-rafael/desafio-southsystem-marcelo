import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
  background: var(--background-4);
  height: 5.6rem;
  border-radius: 1rem;
  border: 0;
  padding: 0 1.6rem;
  color: var(--text-color-4);
  width: 100%;
  font-weight: var(--font-medium);
  margin-top: 1.6rem;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`
