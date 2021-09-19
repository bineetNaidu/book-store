import styled from 'styled-components';

export const Button = styled.button<{ width?: number | string }>`
  background: transparent;
  color: grey;
  font-size: 0.8rem;
  padding: 0.3rem 0.2rem;
  text-transform: uppercase;
  width: ${(props) => props.width || '100%'};
  outline: none;
  border: none;
  font-weight: bold;
  cursor: pointer;
  margin: 0 5px;
  border-radius: 0.1rem;

  &:hover {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  }
`;
