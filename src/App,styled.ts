import styled, { keyframes } from "styled-components";

const blinkingAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

type arrowtop = {
  arrow?: boolean;
  icon?: boolean;
};

export const AppContainer = styled.div<arrowtop>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Container = styled.div`
  margin-top: 200px;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .bloco {
    height: 100vh;
    width: 100%;
  }
`;

export const Arrow = styled.div<arrowtop>`
  position: fixed;
  top: 80vh;
  left: ${(props) => (props.arrow ? "15px" : "-50px")};
  border: 4px solid ${(props) => props.theme.colors.blue};
  display: flex;
  border-radius: 100%;
  padding: 7px;
  transition: all ease-in-out 0.4s;
  cursor: pointer;
  animation: ${props => props.icon ? blinkingAnimation : null} 1s linear infinite;

  path,
  svg {
    fill: ${(props) => props.theme.colors.blue};
    stroke-width: 2px;
    stroke: ${(props) => props.theme.colors.blue};
  }
`;

// animation: ${(props) => (props.iconmove ? blinkingAnimation : null)};
