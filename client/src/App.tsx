import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Home, News } from './components';
import { NewsContainer } from './components/News/style';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NewsContainer>
        <News/>
        <News/>
      </NewsContainer>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
