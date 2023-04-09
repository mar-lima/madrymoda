import styled from "styled-components";

type headerMenu = {
  back?: boolean;
  open?: boolean;
};

export const Header = styled.div<headerMenu>`
  /* z-index: 999; */
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 40px;
  position: fixed;
  top: ${(props) => (props.back ? "0" : "-100px")};
  left: 0;
  transition: all ease-in-out 0.4s;

  .logo {
    display: flex;
    width: 100px;
    border-radius: 100%;
    cursor: pointer;
  }
  img {
    width: 100%;
  }
  a {
    display: flex;
    text-decoration: none;
  }

  @media (max-width: 750px) {
    height: 100vh;
    align-items: flex-start;
    .logo {
      margin-top: 30px;
      width: 200px;
      /* display: none; */
    }
  }
`;

export const Menu = styled.ul<headerMenu>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;

  li a {
    font-size: 20px;
    color: ${(props) => props.theme.colors.black};
    font-weight: bold;
  }

  @media (max-width: 750px) {
    background-color: rgb(48 49 50 / 82%);
    flex-direction: column;
    align-items: flex-start;
    padding-left: 20px;
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: ${(props) => (props.open ? "0" : "-900px")};
    transition: all ease-in-out 0.6s;
  }
`;

export const MenuBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 750px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    z-index: 9999;
    li a {
      color: ${(prop) => prop.theme.colors.white};
    }
  }
`;

export const Burger = styled.div<headerMenu>`
  display: none;
  @media (max-width: 750px) {
    z-index: 999;
    position: absolute;
    left: ${(props) => (props.open ? "85vw" : "20px")};
    top: 50px;
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: all ease-in-out 0.8s;
    cursor: pointer;

    .bar {
      background-color: ${(prop) => prop.theme.colors.graySecundary};
      width: 100%;
      height: 5px;
      display: block;
      transition: all ease-in-out 0.3s;
    }

    .rotate-top {
      position: ${(prop) => (prop.open ? "relative" : "static")};
      top: 40%;
      right: 0px;
      display: block;
      width: 100%;
      height: 5px;
      rotate: ${(prop) => (prop.open ? "calc(45deg)" : null)};
    }
    .rotate-botton {
      position: ${(prop) => (prop.open ? "relative" : "static")};
      bottom: 50%;
      left: 0px;
      rotate: ${(prop) => (prop.open ? "calc(-45deg)" : null)};
    }
    .rotate-bar {
      top: 50%;
      right: 0px;
      opacity: ${(prop) => (prop.open ? "0" : "1")};
    }
  }
`;
