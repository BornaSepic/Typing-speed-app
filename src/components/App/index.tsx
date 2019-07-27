import React from 'react';
import * as Styled from './style';
import Typer from '../Typer';

const App: React.FC = () => {
  return (
    <Styled.AppWrapper>
      <h1>Typing speed test</h1>
      <Typer />
    </Styled.AppWrapper>
  );
}

export default App;
