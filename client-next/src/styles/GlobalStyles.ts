"use client";

import styled, { createGlobalStyle } from "styled-components";
import backgroundImg from "@/assets/background.png";

export const GlobalStyles = createGlobalStyle`
  html {
  }

  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    overscroll-behavior-x: none;
    overflow: hidden;

    background: url(${backgroundImg.src}) no-repeat center center;
    background-size: cover;
  }

  #root {
    overflow: hidden;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* body */
  body {
    margin: 0;
  }

  * {
    font-family: "MuseoModerno", sans-serif;
  }

  [tabindex="-1"]:focus {
    outline: none;
  }

  /* группировка контента
    1. Корректный box-sizing для лисы
    2. Показывать переполнение в Edge
  */
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  /* Типографика */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }

  /* Убираем отступы */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
  }

  /* Корректная толщина шрифта для Chrome, Edge, Safari*/
  b,
  strong {
    font-weight: bolder;
  }

  /* Списки */

  ul[class],
  ol[class],
  dl[class] {
    list-style: none;
  }

  button {
    padding: 0;
  }

  /* Ссылки */

  a {
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: color 0.3s;
    text-decoration: none;
    -webkit-text-decoration-skip: objects;
  }

  a:active,
  a:hover,
  a:focus {
    text-decoration: none;
    outline: none;
  }

  a:disabled {
    cursor: not-allowed;
  }

  /* Изображения */
  img {
    vertical-align: middle;
    border-style: none;
  }

  /* Таблицы */
  table {
    border-collapse: collapse;
  }

  /* Формы */
  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  /* Удаляет внутреннюю границу и отступ из Firefox */
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  input[type="radio"],
  input[type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
  }

  input[type="date"],
  input[type="time"],
  input[type="datetime-local"],
  input[type="month"] {
    appearance: listbox;
    -webkit-appearance: listbox;
  }

  input[type="text"],
  input[type="password"],
  input[type="number"],
  textarea {
    appearance: none;
    -webkit-appearance: none;
  }

  input::-ms-clear,
  input::-ms-reveal {
    display: none;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  /* Удаляет внутренние отступы и кнопки отмены в Chrome и Safari на macOS.*/
  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /* Make clicks pass-through */
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: blue;

    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 3px;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0;
    width: 100px;
    height: 100%;
    opacity: 1;
    transform: rotate(3deg) translate(0px, -4px);
  }
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 1170px;
  margin: 0 auto;

  /* ===== Кастомный скроллбар ===== */

  /* Chrome, Edge, Safari */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.25);
    border-radius: 6px;
    transition: background 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.25) transparent;
  }
`;
