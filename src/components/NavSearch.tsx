import styled from "styled-components";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";
import { setNone } from "../store/modules/characters/sagas";
import { useDispatch } from "react-redux";

const Nav = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavSearch= () => {
  const dispatch = useDispatch();
  const logo = "/assets/logo/Group@3x.png";
  // let search = false; // Inicializando com um valor padrão

  // if (isNavSearch) {
  //   search = true;
  // }
  // if (!isNavSearch) {
  //   search = false;
  // }

  return (
    <Nav>
      <Link to='/' onClick={() => dispatch(setNone())}>
        <img height={140} src={logo} alt="marvel logo" />
      </Link>
      <SearchBar/>
    </Nav>
  );
};

export default NavSearch;
