import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

//Terms
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Terms } from "./pages"

import { Banner, Footer } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Banner/>
      <Terms/>
      <Footer/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
