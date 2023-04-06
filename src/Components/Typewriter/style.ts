import styled, { keyframes } from "styled-components";

const typingKeyframes = `
  from {
    width: 1;
    opacity: 0; /* adicionando opacidade inicial */
  }
  to {
    width: 100%;
    opacity: 1; /* definindo opacidade máxima */
  }
`;

const transition = keyframes`
  0% {
    opacity:1;
  }
  50% {
   opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${(props) => props.theme.colors.black};
    padding-bottom: 50px;
    font-weight: bold;
    transition: all ease-in-out 0.3s;
  }

  & h1:after {
    content: "|"; 
    position: relative;
    right: 0;
    width: 10px;
    height: 80%;
    margin-left: 5px;
    
    animation: ${transition} 1s infinite;
    display: inline-flex;
  }

  span {
    color: ${(props) => props.theme.colors.grayPrimary};
    width: 80%;
    text-align: start;
    font-size: 32px;
    font-weight: bold;
    line-height: 1.8;
    font-family: sans-serif;
  }

  & span:after {
    content: "|"; /* adicionando o traço */
    position: relative;
    right: 0;
    width: 10px;
    height: 100%;
    margin-left: 5px;
    
    animation: ${transition} 1s infinite;
    display: inline-flex;
  }
`;
