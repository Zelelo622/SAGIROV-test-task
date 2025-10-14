"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  PlanetButton,
  HeroContainer,
  HeroContent,
  HeroSubtitle,
  HeroTitle,
  PlanetBtnContainer,
} from "./styles";
import Advantages from "../Adventages/Adventages";

const Hero = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [lineCoords, setLineCoords] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  const [showLine, setShowLine] = useState(true);

  useEffect(() => {
    const updateLine = () => {
      if (!buttonRef.current) return;

      const btnRect = buttonRef.current.getBoundingClientRect();
      const x1 = btnRect.left + btnRect.width / 2;
      const y1 = btnRect.top + btnRect.height / 2;

      const x2 = window.innerWidth / 2 + 30;
      const y2 = window.innerHeight * 0.68;

      setLineCoords({ x1, y1, x2, y2 });
    };

    const checkWidth = () => {
      setShowLine(window.innerWidth > 768);
    };

    // начальная проверка
    updateLine();
    checkWidth();

    window.addEventListener("resize", updateLine);
    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", updateLine);
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>ПУТЕШЕСТВИЕ</HeroTitle>
        <HeroSubtitle>на красную планету</HeroSubtitle>
      </HeroContent>

      <PlanetBtnContainer>
        <PlanetButton className="rocket" ref={buttonRef}>
          <span>Начать путешествие</span>
        </PlanetButton>
      </PlanetBtnContainer>

      {showLine && (
        <svg
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          <line
            x1={lineCoords.x1}
            y1={lineCoords.y1}
            x2={lineCoords.x2}
            y2={lineCoords.y2}
            stroke="white"
            strokeWidth={2}
          />
          <circle
            cx={lineCoords.x2}
            cy={lineCoords.y2}
            r={5}
            stroke="white"
            strokeWidth={2}
            fill="transparent"
          />
        </svg>
      )}

      <Advantages />
    </HeroContainer>
  );
};

export default Hero;
