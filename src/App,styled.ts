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
  margin-top: 100px;
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
    /* background-color: bisque; */
  }
`;

export const Arrow = styled.div<arrowtop>`
  position: fixed;
  top: 80vh;
  right: ${(props) => (props.arrow ? "15px" : "-150px")};
  /* border: 4px solid ${(props) => props.theme.colors.blue}; */
  display: flex;
  border-radius: 10px;
  padding: 7px;
  transition: all ease-in-out 0.3s;
  background-color: ${(prop) => prop.theme.colors.blue};
  color: ${(prop) => prop.theme.colors.graySecundary};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.graySecundary};
    svg {
      fill: ${(props) => props.theme.colors.blue};
      stroke: ${(prop) => prop.theme.colors.blue};
    }
    h5 {
      color: ${(prop) => prop.theme.colors.blue};
    }
  }

  svg {
    fill: ${(props) => props.theme.colors.graySecundary};
    stroke-width: 2px;
    stroke: ${(props) => props.theme.colors.graySecundary};
    margin-right: 4px;
    transition: all ease-in-out 0.3s;
  }
  h5 {
    transition: all ease-in-out 0.3s;
  }
`;

// animation: ${(props) => (props.iconmove ? blinkingAnimation : null)};
