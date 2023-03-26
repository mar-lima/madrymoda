import { useState } from "react";
import * as S from "./App,styled";
import { ThemeProvider } from "styled-components";
import theme from './Style/theme'
import Header from "./Components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    
      <S.AppContainer>
        <Header/>
      </S.AppContainer>
    
  );
}

export default App;
