import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family:'Roboto', sans-serif ;
    src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap');
}    
* {
    
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    
}
body {
    color: ${props => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.secundary}; 
    width: 100%;
    margin: 0 auto;

    }

`;
