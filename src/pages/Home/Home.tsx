import React, { useState } from "react";
import TypeWriter from "../../Components/Typewriter/Typewriter";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const typewriters = [
    {
      text: "Bem-vinda à Madry Moda!",
      speed: 120,
      tag: "h1",
      onComplete: () => setCurrentIndex(currentIndex + 1),
    },
    {
      text: "Somos uma empresa especializada em roupas de dormir femininas, oferecendo uma variedade de opções para o seu conforto e estilo.",
      speed: 60,
      tag: "span",
      onComplete: () => setCurrentIndex(currentIndex + 1),
    },
    // Adicione mais objetos de TypeWriter conforme necessário
  ];

  const onComplete = () => {
    setCurrentIndex(currentIndex + 1);
  };
  return (
    <>
      {typewriters.map((typewriter, index) =>
        index <= currentIndex ? (
          <TypeWriter key={index} {...typewriter} />
        ) : null
      )}
    </>
  );
};

export default Home;
