import React from 'react';
import styled, {css} from 'styled-components';

import {FadeIn} from './styled/index';

const StyledButton = styled.button`
  padding: .5rem 1rem;
  font-size: 1.2rem;
  color: #fff;
  outline: none;
  border: none;
  background-color: #000;
  border-radius: 3px;
  transition: 0.5s;
  animation: 2.5s ${FadeIn} ease-in;
  ${({primary})=> primary && css`
    color: red;
    background-color: #333;
    border: 1.5px solid red;
    box-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, 0.2);
  `}

  &:hover{
    letter-spacing: 0.1rem;
  }

  @media ${({theme}) => theme.mediaQueries.bellow768} {
    font-size: 0.8rem;
  }

`;

// style inheritance
// eslint-disable-next-line
const SmallButton = styled(StyledButton)`
  font-size: 0.8rem;
`;

const OutterWrapper = styled.div`
  width: 100%;
  background-color: blueviolet;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* when the outter wrapper be hoverd, will apply the this style in Styled Button  */
  &:hover ${StyledButton}{
    margin: 1.1rem 0;
  }
`;

const Button = ({primary, children}) => {
  return (
    <OutterWrapper>
      <StyledButton primary={primary}>
        {children}
      </StyledButton>
    </OutterWrapper>
  );
}

export default Button;