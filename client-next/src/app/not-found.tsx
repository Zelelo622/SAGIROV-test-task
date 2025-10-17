"use client";

import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
  text-align: center;
  background: #000;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.8;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: underline;
  font-size: 1.2rem;

  &:hover {
    opacity: 0.8;
  }
`;

export default function NotFound() {
  return (
    <Container>
      <Title>404</Title>
      <Message>Страница не найдена</Message>
      <StyledLink href="/">Вернуться на главную</StyledLink>
    </Container>
  );
}
