import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { News } from './components';
import { Footer } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <News/>    
      <GlobalStyle/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
