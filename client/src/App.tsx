import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

//Terms
import { News } from './components';
import { Projects } from './components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Terms } from "./pages"

import { Banner, Footer } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Banner/>
      <GlobalStyle/>
      <Terms/>
      <News/>    
      <Projects/>
      <Footer/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
