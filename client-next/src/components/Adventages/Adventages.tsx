"use client";

import React from "react";
import {
  AdvantageCard,
  AdvantageDescription,
  AdvantageLabel,
  AdvantagesContainer,
  AdvantagesGrid,
  AdvantageValue,
} from "./styles";

const Advantages: React.FC = () => {
  return (
    <AdvantagesContainer>
      <AdvantagesGrid>
        <AdvantageCard>
          <AdvantageLabel>Мы</AdvantageLabel>
          <AdvantageValue>1</AdvantageValue>
          <AdvantageDescription>на рынке</AdvantageDescription>
        </AdvantageCard>

        <AdvantageCard>
          <AdvantageLabel>гарантируем</AdvantageLabel>
          <AdvantageValue>50%</AdvantageValue>
          <AdvantageDescription>безопасность</AdvantageDescription>
        </AdvantageCard>

        <AdvantageCard>
          <AdvantageLabel>календарик за</AdvantageLabel>
          <AdvantageValue>2001</AdvantageValue>
          <AdvantageDescription>в подарок</AdvantageDescription>
        </AdvantageCard>

        <AdvantageCard>
          <AdvantageLabel>путешествие</AdvantageLabel>
          <AdvantageValue>597</AdvantageValue>
          <AdvantageDescription>дней</AdvantageDescription>
        </AdvantageCard>
      </AdvantagesGrid>
    </AdvantagesContainer>
  );
};

export default Advantages;
