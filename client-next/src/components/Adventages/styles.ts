import styled from "styled-components";

export const AdvantagesContainer = styled.div`
  display: flex;
  position: absolute;
  top: 60px;
  right: 24px;

  @media (max-width: 768px) {
    position: static;
    margin-bottom: 10px;
  }
`;

export const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    gap: 10px;
    width: 100%;
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
    gap: 10px;
    width: 100%;
    padding: 0 10px;
  }
`;

export const AdvantageCard = styled.div`
  padding: 20px 12px;
  text-align: center;
  color: #fff;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:nth-child(1) {
    background: linear-gradient(
      315deg,
      rgba(42, 44, 52, 1) 0%,
      rgba(0, 0, 0, 0) 70%
    );
  }
  &:nth-child(2) {
    background: linear-gradient(
      45deg,
      rgba(42, 44, 52, 1) 0%,
      rgba(0, 0, 0, 0) 70%
    );
  }
  &:nth-child(3) {
    background: linear-gradient(
      225deg,
      rgba(42, 44, 52, 1) 0%,
      rgba(0, 0, 0, 0) 70%
    );
  }
  &:nth-child(4) {
    background: linear-gradient(
      135deg,
      rgba(42, 44, 52, 1) 0%,
      rgba(0, 0, 0, 0) 70%
    );
  }

  &:hover {
    transform: translateY(-3px);
  }

  @media (max-width: 460px) {
    background: linear-gradient(
      315deg,
      rgba(42, 44, 52, 1) 0%,
      rgba(0, 0, 0, 0) 70%
    ) !important;
  }
`;

export const AdvantageValue = styled.h4`
  font-size: 40px;
`;

export const AdvantageLabel = styled.p`
  font-size: 16px;
  opacity: 0.8;
`;

export const AdvantageDescription = styled.p`
  font-size: 16px;
  opacity: 0.8;
`;
