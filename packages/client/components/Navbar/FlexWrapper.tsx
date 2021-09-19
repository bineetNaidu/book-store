import styled from 'styled-components';

export const FlexWrapper = styled.div<{
  flex: number;
  justifyContent?:
    | 'end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent || 'center'};
  flex: ${(props) => props.flex};
  width: 100%;
`;
