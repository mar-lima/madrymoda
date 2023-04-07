import React, { useState, useEffect, useRef } from "react";
import * as S from "./App,styled";
import Header from "./Components/Header/Header";
import { HashRouter, Routes } from "react-router-dom";
import { Route } from "react-router";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound";
import Catalog from "./pages/Catalog/Catalog";
import Contact from "./pages/Contact/Contact";

import { RxDoubleArrowUp } from "react-icons/all";
import { routesConfig } from "./routes/routsConfig";
import TypeWriter from "./Components/Typewriter/Typewriter";
import Footer from "./Components/Footer/Footer";

function App() {
  const appref = useRef<HTMLDivElement>(null);
  const moveTop = useRef(null);
  const [arrowTop, setArrowTop] = useState(false);
  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
    const scrolListner = () => {
      if (window.scrollY > 0) {
        setArrowTop((props) => (props = true));
      }
      if (window.scrollY === 0) {
        setArrowTop((props) => (props = false));
      }
    };
    window.addEventListener("scroll", scrolListner);
    return () => {
      window.removeEventListener("scroll", scrolListner);
    };
  }, []);

  //para controllar a animaçao da flecha
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (arrowTop) {
  //       setShowIcon((prev) => !prev);
  //     } else {
  //       setShowIcon(false);
  //     }
  //   }, 9000);
  //   return () => clearInterval(intervalId);
  // }, [arrowTop]);

  //função com useref para voltar ao topo
  const handleClickTop = () => {
    appref.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <S.AppContainer id="element-top" arrow={arrowTop} ref={appref}>
      <Header />
      <S.Container>
        <Routes>
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.element()} />
          ))}
        </Routes>
      </S.Container>
      <S.Arrow
        id="arrow"
        arrow={arrowTop}
        onClick={handleClickTop}
        icon={showIcon}>
        <RxDoubleArrowUp />
        <h5>Voltar ao topo</h5>
      </S.Arrow>

      <Footer />
    </S.AppContainer>
  );
}

export default App;
