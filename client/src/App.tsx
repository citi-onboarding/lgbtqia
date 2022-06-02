import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { News } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <News/>    
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
