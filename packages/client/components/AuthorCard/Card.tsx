import styled from 'styled-components';

export const Card = styled.div<{ height?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => (props.height ? props.height : '100%')};
  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  margin: 10px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }
`;
