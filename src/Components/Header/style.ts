import styled from "styled-components";

export const Header = styled.div`
z-index: 999;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 40px;
  position: fixed;
  top: 0;
  left: 0;
  transition: all ease-in-out .4s;
  .logo {
    display: flex;
    width: 50px;
    border-radius: 100%;
    box-shadow: 0px 0px 4px 2px #d1345b, 0px 0px 3px 1px #fff;
    cursor: pointer;
  }
  img {
    width: 100%;
  }
  a {
    display: flex;
    text-decoration: none;
  }
`;

export const Menu = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
 list-style: none;
 
 li a{
  font-size: 20px;
  color: ${(props) => props.theme.colors.black};
  font-weight: bold;
 }
`