import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";
import { animation } from "../../helpers/animePage";

const Header = ({}) => {
  const [backHeader, setBackHeader] = useState(true);
  const [clickMenu, setClickMenu] = useState(false);
  const myMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollListner = () => {
      const winTop = animation.anime();
      var headerTop = myMenu.current?.offsetTop;
      window.scrollY;
      if (window.scrollY > 0 && window.innerWidth > 750) {
        setBackHeader(false);
      }
      if (window.scrollY === 0) {
        setBackHeader(true);
      }
    };
    window.addEventListener("scroll", scrollListner);
    return () => {
      window.removeEventListener("scroll", scrollListner);
    };
  }, []);

  const MenuOpen = () => {
    if (!clickMenu) {
      setClickMenu(true);
    } 
    else{
      setClickMenu(false)
    }
  };

  return (
    <S.Header back={backHeader} ref={myMenu}>
      <div className="logo">
        <Link to="madrymoda/">
          <img src={logo} alt="" />
        </Link>
      </div>

      <S.Burger open={clickMenu} onClick={MenuOpen}>
        <div className="bar rotate-top "></div>
        <div className="bar rotate-bar"></div>
        <div className="bar rotate-botton"></div>
      </S.Burger>
      <S.Menu open={clickMenu}>
        <S.MenuBox onClick={() => setClickMenu(false)}>
          <li>
            <Link to="madrymoda/">Inicio</Link>
          </li>
          <li>
            <Link to="madrymoda/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="madrymoda/catalogo">Catálogo</Link>
          </li>
          <li>
            <Link to="madrymoda/contato">Contato</Link>
          </li>
        </S.MenuBox>
      </S.Menu>
    </S.Header>
  );
};

export default Header;
