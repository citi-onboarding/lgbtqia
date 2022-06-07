import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Projects } from './components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Terms } from "./pages"
import { Footer } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Terms/>
      <Footer/>
      <GlobalStyle/>
      <Projects/>
    </ThemeProvider>
  );
}

export default App;
