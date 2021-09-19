import { FC } from 'react';
import styled from 'styled-components';

interface Props {
  marginTop: string;
}

const ComponentWrapper = styled.div<Props>`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #fafafa;
  margin-top: ${(props: Props) => props.marginTop};
  padding: 0 15px;
`;

const Component: FC<Props> = ({ children, ...props }) => {
  return <ComponentWrapper {...props}>{children}</ComponentWrapper>;
};

export default Component;
