import styled from 'styled-components';

interface StyleProps {
  display?: 'flex' | 'block' | 'inline-block' | 'inline-flex';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch';
  flex?: number;
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

export const Wrapper = styled.div<StyleProps>`
  display: ${(props: StyleProps) => props.display || 'flex'};
  flex-direction: ${(props: StyleProps) => props.flexDirection || 'row'};
  justify-content: ${(props: StyleProps) =>
    props.justifyContent || 'flex-start'};
  align-items: ${(props: StyleProps) => props.alignItems || 'flex-start'};
  align-content: ${(props: StyleProps) => props.alignContent || 'flex-start'};
  align-self: ${(props: StyleProps) => props.alignSelf || 'auto'};
  flex: ${(props: StyleProps) => props.flex || '1'};
  flex-wrap: ${(props: StyleProps) => props.flexWrap || 'nowrap'};
`;
