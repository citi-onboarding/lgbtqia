import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Terms } from "./pages"
import { Personality } from './components';

import { Banner, Footer, News, Projects, History } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Banner/>
      <Terms/>
      <History/>
      <News/>
      <Personality/>    
      <Projects/>
      <Footer/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
