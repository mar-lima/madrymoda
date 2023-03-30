import React, { useState } from "react";
import { model1 } from "../../assets/assetsArray/cod01";
import * as S from "./styles";

import code01 from "../../assets/code-01/md-01.webp";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { model2 } from "../../assets/assetsArray/code02";
import Gallery from "../../helpers/galery/Galery";
const Catalog = () => {
  const [scrollX, setScrollX] = useState(0);
  const [lengImg, setLengImg] = useState(model1.length * 250);

 

  return (
    <S.CatalogSection>
      <h1>Galeria</h1>
      <S.Container>
        <Gallery images={model1} />
        <Gallery images={model2} />
      </S.Container>
    </S.CatalogSection>
  );
};

export default Catalog;
