"use client";

import { useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { MenuItem } from "./types";
import {
  HeaderContainer,
  Logo,
  CarouselWrapper,
  CarouselViewport,
  CarouselContainer,
  NavItem,
  Burger,
  MobileMenu,
} from "./styles";
import logoImg from "@/assets/logo.svg";

interface HeaderProps {
  menuItems: MenuItem[];
}

export default function HeaderClient({ menuItems }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [emblaRef] = useEmblaCarousel({ align: "start", dragFree: true });

  return (
    <HeaderContainer>
      <Logo>
        <Image src={logoImg} alt="SpaceX Logo" width={140} height={40} />
      </Logo>

      <CarouselWrapper>
        <CarouselViewport ref={emblaRef}>
          <CarouselContainer>
            {menuItems.map((item) => (
              <NavItem key={item.id}>
                <a className="header-link" href={item.url}>
                  {item.title}
                </a>
              </NavItem>
            ))}
          </CarouselContainer>
        </CarouselViewport>
      </CarouselWrapper>

      <Burger
        onClick={() => setIsOpen(!isOpen)}
        className={isOpen ? "open" : ""}
      >
        <span />
        <span />
        <span />
      </Burger>

      <MobileMenu className={isOpen ? "open" : ""}>
        {menuItems.map((item) => (
          <a key={item.id} href={item.url} onClick={() => setIsOpen(false)}>
            {item.title}
          </a>
        ))}
      </MobileMenu>
    </HeaderContainer>
  );
}
