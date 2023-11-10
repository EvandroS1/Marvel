import { FC, useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import {
  loadRequest,
  loadSearchRequest,
} from "../store/modules/characters/actions";
import { setInputSearchValue } from "../store/modules/dados/actions";

interface SearchBarProps {
  ishome: boolean;
}

export const SearchBar: FC<SearchBarProps> = ({ ishome }) => {
  const [querySearch, setQuerySearch] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null); // Crie uma ref para o input
  const isFocusedRef = useRef(false); // Ref para controlar o foco
  const navigate = useNavigate();
  // const querySearchData: QuerySearchState = {
  //   querySearchh: querySearch,
  // };
  useEffect(() => {
    if (isFocusedRef.current && inputRef.current) {
      dispatch(loadSearchRequest(querySearch));
      dispatch(setInputSearchValue(querySearch));
      inputRef.current.focus(); // Restaura o foco se estiver ativo
    }
    if (querySearch === "" && ishome === true) {
      dispatch(loadRequest());
    }
    
  }, [querySearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuerySearch(e.target.value);
    if (ishome === false) {
      navigate('/');
    }
  };
  const handleInputFocus = () => {
    isFocusedRef.current = true; // Atualiza a ref para indicar que o input está com foco
  };

  const SearchInput = styled.input.attrs({ as: "input" })`
    background-color: #ff000053;
    border-radius: 10rem;
    height: 4rem;
    width: 100%;
    border: none;
    padding-left: 4rem;
    outline: none;
    font-size: 18px;
    color: red;
  `;

  const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-top: 2rem;
  `;
  const WrapperSun = styled.div`
    position: relative;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Lupa = styled.img`
    position: absolute;
    left: 15px;
  `;

  return (
    <Wrapper>
      <WrapperSun>
        <Lupa
          height={25}
          src="/assets/busca/Lupa/Shape@2x.png"
          alt="aaaaa"
        ></Lupa>
        <SearchInput
          ref={inputRef}
          type="text"
          value={querySearch}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder="Procure por heróis"
        />
      </WrapperSun>
    </Wrapper>
  );
};
