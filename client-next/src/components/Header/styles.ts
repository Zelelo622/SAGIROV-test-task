import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background: transparent;
  position: relative;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 15px 25px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 140px;
    height: auto;

    @media (max-width: 768px) {
      width: 100px;
    }
  }
`;

export const CarouselWrapper = styled.div`
  max-width: 60vw;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CarouselViewport = styled.div`
  overflow: hidden;
  cursor: grab;
`;

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 42px;

  > * {
    flex: 0 0 auto;
  }
`;

export const NavItem = styled.div`
  position: relative;

  .header-link {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    padding-bottom: 3px;
    display: block;
    transition: opacity 0.3s;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #fff;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }

    &:hover {
      opacity: 0.8;

      &::after {
        transform: scaleX(1);
      }
    }
  }
`;

export const Burger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 26px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;

  span {
    height: 3px;
    width: 100%;
    background: #fff;
    border-radius: 2px;
    transition: 0.3s;
  }

  &.open span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  &.open span:nth-child(2) {
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenu = styled.nav`
  display: none;
  position: absolute;
  top: 70px;
  right: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.95);
  flex-direction: column;
  padding: 30px 0;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease-in-out;

  a {
    color: #fff;
    font-size: 18px;
    text-decoration: none;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }

  &.open {
    display: flex;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
