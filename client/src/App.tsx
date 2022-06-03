import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Projects } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Projects/>
    </ThemeProvider>
  );
}

export default App;
