import React from 'react';
import styled from 'styled-components';

import Button from './components/Button';

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.theme.colors.dark};
`;

const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${({page})=>{
    if(page === 'first') return 'flex-end';
    else if(page === 'middle') return 'space-between';
    else return 'flex-start';
  }} ;
`;

const Link = styled.a.attrs(props => ({target:'_blank'}))`
  color: violet;
  font-size: 1.1rem;
`;

const App = () =>{
  return (
    <MainWrapper>
      <Button primary>
        Primary Styled Component
      </Button>
      <Button>
        Styled Component
      </Button>
      <PaginationWrapper page='middle'>
        <Button>
          Page 1
        </Button>
        <Button>
          Page 2
        </Button>
      </PaginationWrapper>
      <Link href="https://google.com">One Link</Link>
      <Link href="https://google.com">Another Link</Link>
    </MainWrapper>
  );
}

export default App;
