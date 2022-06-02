import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import T from "./assets/T.svg"
// import Flag4 from "./assets/flag4.png"



import { Terms, Card } from './components';


// type CardProps = {
//   letter: any;
//   term: string;
//   flag: any;
//   description: string;
//   trans: boolean;
// }

// const trans: CardProps = {
//   letter: T,
//   term: "Transexuais, transgêneros, travestis",
//   flag: Flag4,
//   description: "Este é um conceito relacionado à identidade de gênero e não à sexualidade, remetendo"+
//   " à pessoa que possui uma identidade de gênero diferente do sexo designado no nascimento.",
//   trans: true,
// }

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Terms/>
      {/* <Card
      {...trans}
      /> */}
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
