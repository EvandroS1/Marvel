import styled from "styled-components";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";
import { setNone } from "../store/modules/characters/sagas";
import { useDispatch } from "react-redux";
import { FC } from "react";

const Nav = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

interface NavBarProps {
  isNavSearch: boolean;
}

const NavSearch: FC<NavBarProps> = ({ isNavSearch }) => {
  const dispatch = useDispatch();
  const logo = "/assets/logo/Group@3x.png";
  let search = false; // Inicializando com um valor padrão

  if (isNavSearch) {
    search = true;
  }
  if (!isNavSearch) {
    search = false;
  }

  return (
    <Nav>
      <Link to='/' onClick={() => dispatch(setNone())}>
        <img height={140} src={logo} alt="marvel logo" />
      </Link>
      <SearchBar ishome={false} isBarSearch={search} />
    </Nav>
  );
};

export default NavSearch;
