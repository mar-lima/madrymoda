import React, { useState, useEffect } from "react";
import * as S from "./App,styled";
import Header from "./Components/Header/Header";
import { Routes } from "react-router-dom";
import { Route } from "react-router";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound";
import Catalog from "./pages/Catalog/Catalog";
import Contact from "./pages/Contact/Contact";

function App() {
  const [backHeader, setBackHeader] = useState(false);

  useEffect(() => {}, []);

  return (
    <S.AppContainer>
      <Header back={backHeader} />
      <S.Container>
        <h1>Inicio</h1>
        <Routes>
          <Route path="madrymoda/" element={<Home />} />
          <Route path="madrymoda/sobre" element={<About />} />
          <Route path="madrymoda/catalogo" element={<Catalog />} />
          <Route path="madrymoda/catalogo" element={<Catalog />} />
          <Route path="madrymoda/contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className="bloco">b1</div>
        <div className="bloco">b2</div>
        <div className="bloco">b3</div>
      </S.Container>
    </S.AppContainer>
  );
}

export default App;
