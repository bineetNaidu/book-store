import styled from 'styled-components';

interface Props {
  width?: string;
  height?: string;
}

export const BookWrapper = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 10px;
  transition: all 0.05s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.05) translateY(-5px);
  }
`;
