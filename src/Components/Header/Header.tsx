import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import logo from "../../assets/Group4.png";

import { Link } from "react-router-dom";
import { animation } from "../../helpers/animePage";



const Header = ({}) => {
  const [backHeader, setBackHeader] = useState(true);
  const myMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollListner = () => {
      const winTop = animation.anime();
      var headerTop = myMenu.current?.offsetTop;
      window.scrollY;
      if (window.scrollY > 0) {
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

  return (
    <S.Header back={backHeader} ref={myMenu}>
      <div className="logo">
        <Link to="madrymoda/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <S.Menu>
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
      </S.Menu>
    </S.Header>
  );
};

export default Header;
