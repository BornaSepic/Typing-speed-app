import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle` 
  * {
    box-sizing: border-box;
    margin: 0;
  }

  * + * {
    margin-top: 1rem;
  }

  html,
  body {
    margin: 0;
    color: #555;
    font-family: -apple-system, Roboto, Helvetica, sans-serif;
    font-size: 18px;
    line-height: 1.4;
  
    > div {
      margin-top: 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: #222;
    line-height: 1.1;

    + * {
      margin-top: 0.5rem;
    }
  }

  strong {
    color: #222;
  }

  li {
    margin-top: 0.25rem;
  }
`;

export const AppWrapper = styled('main')`
  margin: 2rem auto 4rem;
  max-width: 90vw;
  width: 720px;
`;