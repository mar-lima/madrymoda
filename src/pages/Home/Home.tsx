import React, { useState, useEffect } from "react";
import TypeWriter from "../../Components/Typewriter/Typewriter";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [localStorageUpdated, setLocalStorageUpdated] = useState(false);

  useEffect(() => {
    const hasRun = localStorage.getItem("hasRun") === "true";
    if (hasRun) {
      setCurrentIndex(typewriters.length);
    } else {
      localStorage.setItem("hasRun", "true");
    }

    if (localStorage.getItem("hasRun") === "0") {
      setLocalStorageUpdated(true);
    }
  }, []);

  useEffect(() => {
    if (localStorageUpdated) {
      setCurrentIndex(0);
    }
  }, [localStorageUpdated]);

  const typewriters = [
    {
      text: "Bem-vinda à Madry Moda!",
      speed: 120,
      tag: "h1",
      onComplete: () => {
        setCurrentIndex(currentIndex + 1);
        localStorage.setItem("hasRun", "true");
      },
    },
    {
      text: "Somos uma empresa especializada em roupas de dormir femininas, oferecendo uma variedade de opções para o seu conforto e estilo.",
      speed: 60,
      tag: "span",
      onComplete: () => setCurrentIndex(currentIndex + 1),
    },
  ];

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
