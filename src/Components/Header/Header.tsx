import React from "react";
import * as S from "./style";
import logo from "../../assets/Group4.png";

import { Routes } from "react-router-dom";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Catalog from "../../pages/Catalog/Catalog";

const Header = ({back}) => {


  return (
    <S.Header className={back}>
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
