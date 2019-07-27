import styled from 'styled-components';

interface TyperDisplayWrapperStyleProps {
  offsetWidth: number;
}

export const TyperDisplayWrapper = styled('div')`
  text-align: center;
  white-space: nowrap;
  
  transform: translateX(calc(50% - ${(props: TyperDisplayWrapperStyleProps) => props.offsetWidth}px));
  transition: all 0.5s ease-in-out;
`;

export const TypedWordsWrapper = styled('span')`
`;

export const CurrentWordWrapper = styled('span')`
  font-size: 150%;
  margin: 0 10px;
`;

export const LetterToTypeWrapper = styled('span')`
  color: lightgreen;
`;
