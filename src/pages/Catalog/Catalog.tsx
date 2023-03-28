import React, { useState } from "react";
import { model1 } from "../../assets/assetsArray/cod01";
import * as S from "./styles";

import code01 from "../../assets/code-01/md-01.webp";
const Catalog = () => {
   const [scrollX, setScrollX] = useState(0)
   const [lengImg, setLengImg] = useState(model1.length * 250)
  const handleNextClick = () => {
    let x = scrollX - 250
    if (x <= model1.length * 250  *-1) {
      x = 0
    }
    console.log(x)
    
    setScrollX((props => props = x) )
  }
  const handlePrevClick = () => {
    let x = scrollX + 250
    if (x > 0) {
      x = model1.length * 250 * -1
    }
    console.log(x)
    
    setScrollX((props => props = x) )
    setScrollX((props => props + 250) )
  }

  return (
    <S.CatalogSection>
      <h1>Galeria</h1>
      <S.Container>
        <S.GaleryContainer id="galeria">
          <S.BoxContainer wid={lengImg} move={scrollX}>
            {model1.map((item) => (
              <div className="img-box" key={item.id}>
                {" "}
                <img src={item.url} alt="" />{" "}
              </div>
            ))}
          </S.BoxContainer>
          
        </S.GaleryContainer>
        <button onClick={handlePrevClick} >prev</button>
          <button onClick={handleNextClick} >next</button>

        <S.GaleryContainer id="galeria">
          <div className="box-container">
            {model1.map((item) => (
              <div className="img-box" key={item.id}>
                {" "}
                <img src={item.url} alt="" />{" "}
              </div>
            ))}
          </div>
        </S.GaleryContainer>
      </S.Container>
    </S.CatalogSection>
  );
};

export default Catalog;
