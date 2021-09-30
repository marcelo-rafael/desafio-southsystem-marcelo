import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
  margin-top: -140px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 32px;
  justify-content: center;
`;
