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
    console.log(x);

    setScrollX((props) => (props = x));
  };

  const handlePrevClick = () => {
    let x = scrollX + 250;
    if (x > 0) {
      x = images.length * 250 * -1;
    }
    console.log(x);

    setScrollX((props) => (props = x));
    setScrollX((props) => props + 250);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setStartTouch(event.touches[0].clientX);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const touchMove = event.touches[0].clientX;
    const distance = startTouch - touchMove;

    setScrollX((prevScrollX) => prevScrollX - distance);
    setStartTouch(touchMove);
  };

  const handleTouchEnd = () => {
    const snapToImage = Math.round(scrollX / 250) * 250;
    setScrollX(snapToImage);
  };

  return (
    <S.GaleryContainer id="galeria">
      <S.Prev onClick={handlePrevClick} id="prev">
        <MdOutlineKeyboardDoubleArrowLeft />
      </S.Prev>

      <S.Next onClick={handleNextClick} id="next">
        <MdOutlineKeyboardDoubleArrowRight />
      </S.Next>
      <S.BoxContainer
       wid={lengImg} 
       move={scrollX}
       onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
       >

        {images.map((item) => (
          <div className="img-box" key={item.id}>
            <img src={item.url} alt="" />
          </div>
        ))}
      </S.BoxContainer>
    </S.GaleryContainer>
  );
};

export default Gallery;
