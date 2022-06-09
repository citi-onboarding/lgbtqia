import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import { News } from './components';
import { Projects } from './components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Terms } from "./pages";
import { Footer } from './components';
import { Navbar } from './components';
import { Banner } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
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
