import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { News } from './components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Terms } from "./pages"
import { Footer } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <News/>    
      <GlobalStyle/>
      <Terms/>
      <Footer/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
