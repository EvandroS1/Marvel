import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { DataState } from "../store";

const MarvelLogo = styled.div`
  width: 6rem;
  color: ${({ theme }) => theme.color};
`;

const Ul = styled.ul`
  display: flex;
  @media (max-width: 767px) {
    display: none;
  }
  gap: 5rem;
  list-style-type: none;
  color: ${({ theme }) => theme.color};
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 14rem;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export default function Footer() {
  const savedTheme = localStorage.getItem("theme") || "";
  const globalTheme = useSelector((state: DataState) => state.data.data);
  const [theme, setTheme] = useState("");
  const [globalThemeState, setglobalThemeState] = useState("");
  if(globalTheme) {
    setglobalThemeState
  }
  useEffect(() => {
    if (globalThemeState.length === 0) {
      setTheme(savedTheme);
    }
    console.log("theme1", theme);
  }, []);
  useEffect(() => {
    if (globalThemeState.length > 1) {
      setTheme(globalThemeState);
    }
    console.log("theme2", theme);
    console.log("footer", globalThemeState.length);
    console.log("footer, savedTheme", theme);
  }, [globalThemeState]);
  useEffect(() => {
    console.log("theme3", theme);
  }, [theme]);

  return (
    <ThemeProvider
      theme={{
        color: globalThemeState === "dark" ? "white" : "black",
        backgroundColor: globalThemeState === "dark" ? "black" : "white",
      }}
    >
      <MainWrapper>
        <MarvelLogo>
          <svg
            viewBox="0 0 36 52"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect fill="#EC1D24" width="100%" height="100%"></rect>
            <path
              fill="#FEFEFE"
              d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"
            ></path>
          </svg>
        </MarvelLogo>
        <Ul>
          <li>Condiciones para el uso</li>
          <li>Política de Privacidad</li>
          <li>Anuncios basados en intereses</li>
          <li>Protección de Datos en Brasil</li>
          <li>Acuerdo de licencia</li>
          <li>©2023 MARVEL</li>
        </Ul>
      </MainWrapper>
    </ThemeProvider>
  );
}
