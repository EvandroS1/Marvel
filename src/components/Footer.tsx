import styled from "styled-components";

const MainWrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 14rem;
`;
const MarvelLogo = styled.div`
  width: 6rem;
  `;
  const Ul = styled.ul`
  display: flex;
  gap: 5rem;
list-style-type: none;
color: white; `;
export default function Footer() {
  return (
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
  );
}
