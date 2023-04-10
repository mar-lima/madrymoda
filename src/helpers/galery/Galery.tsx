import React, { useState } from "react";
import * as S from "./styles";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

interface Image {
  id: number;
  url: string;
}

interface GalleryProps {
  images: Image[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [scrollX, setScrollX] = useState(0);
  const [lengImg, setLengImg] = useState(images.length * 250);
  const [startTouch, setStartTouch] = useState(0);

  const handleNextClick = () => {
    let x = scrollX - 250;
    if (x <= images.length * 250 * -1) {
      x = 0;
    }
    setScrollX((props) => (props = x));
  };
  const handlePrevClick = () => {
    let x = scrollX + 250;
    if (x > 0) {
      x = images.length * 250 * -1;
    }
    setScrollX((props) => (props = x));
    setScrollX((props) => props + 250);
  };

  return (
    <S.GaleryContainer id="galeria">
      <S.Prev onClick={handlePrevClick} id="prev">
        <MdOutlineKeyboardDoubleArrowLeft />
      </S.Prev>

      <S.Next onClick={handleNextClick} id="next">
        <MdOutlineKeyboardDoubleArrowRight />
      </S.Next>
      <S.BoxContainer wid={lengImg} move={scrollX}>
        {images.map((item) => (
          <S.ImgBox key={item.id}>
            <img src={item.url} alt="" />
          </S.ImgBox>
        ))}
      </S.BoxContainer>
    </S.GaleryContainer>
  );
};

export default Gallery;
