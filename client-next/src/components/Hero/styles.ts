import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  overflow: auto;
  height: 100%;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  padding: 112px 0 0 24px;

  @media (max-width: 768px) {
    padding: 20px 0 0 24px;
  }

  @media (max-width: 460px) {
    padding: 0 10px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 58px;
  font-weight: 400;
  text-transform: uppercase;

  background: linear-gradient(90deg, #ffffff 0%, #ff4106 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 488px) {
    font-size: 38px;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;

  background: linear-gradient(90deg, #ffffff 0%, #ff906e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 488px) {
    font-size: 14px;
  }
`;

export const PlanetBtnContainer = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px 24px;
  }

  @media (max-width: 460px) {
    flex-direction: column;
    align-items: stretch;
    padding: 20px 10px;
  }
`;

export const PlanetButton = styled.button`
  padding: 10px 22px;
  background: #15161e;
  color: #fff;
  border: 1px solid #1a375e;
  font-weight: 400;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  z-index: 10;

  &.rocket {
    top: 30px;
    left: 20px;
  }

  &::before,
  &::after,
  span::before,
  span::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    transition: all 0.3s ease;
  }

  &::after {
    top: 0;
    right: 0;
    border-top: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  span::before {
    bottom: 0;
    left: 0;
    border-bottom: 1px solid transparent;
    border-left: 1px solid transparent;
  }

  &:hover::before,
  &:hover::after,
  &:hover span::before,
  &:hover span::after {
    border-color: #fff;
  }

  @media (max-width: 768px) {
    &.rocket {
      top: 0;
      left: 0;
    }
  }
`;
