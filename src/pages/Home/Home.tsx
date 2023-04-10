import React, { useState, useEffect, useRef } from "react";
import backImg from "../../assets/backImage.png";
import * as S from "./styles";
import { animation } from "../../helpers/animePage";

const Home = () => {
  const [backHeader, setBackHeader] = useState(false);
  const animeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollListner = () => {
      const winTop = animation.anime();
      const headerTop = animeRef.current?.offsetTop ?? 0;

      if (window.scrollY > 0) {
        setBackHeader(true);
      } else {
        setBackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListner);
    return () => {
      window.removeEventListener("scroll", scrollListner);
    };
  }, []);

  return (
    <S.Section>
      <S.Container>
        <div className="welcome">
          <h1>Bem-vindo(a) à Madry Moda!</h1>
        </div>

        <S.AnimeText back={backHeader} ref={animeRef}>
          <span>
            "Somos uma empresa especializada em roupas de dormir femininas,
            oferecendo uma variedade de opções para o seu conforto e estilo."
          </span>
        </S.AnimeText>
      </S.Container>
    </S.Section>
  );
};

export default Home;
