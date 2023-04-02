import React, { useState, useEffect } from "react";
import * as S from "./style";
interface Props {
  text: string;
  speed?: number;
  tag?: string;
  onComplete?: () => void;
}

const TypeWriter: React.FC<Props> = ({
  text,
  speed = 100,
  tag = "div",
  onComplete,
}) => {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const animate = () => {
      const currentLength = currentText.length;
      if (currentLength === text.length) {
        onComplete?.();
        clearInterval(timer);
      } else {
        const nextChar = text[currentLength];
        setCurrentText(currentText + nextChar);
      }
    };

    timer = setInterval(animate, speed);

    return () => clearInterval(timer);
  }, [currentText, text, speed, onComplete]);

  const Tag = tag as keyof JSX.IntrinsicElements;

  return (
    <S.Container>
      <div>
        <Tag>{currentText}</Tag>
      </div>
    </S.Container>
  );
};

export default TypeWriter;
