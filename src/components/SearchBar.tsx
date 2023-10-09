import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loadSearchRequest } from "../store/modules/characters/actions";

export const SearchBar = () => {
  const load = (): void => {}
  const [querySearch, setQuerySearch] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSearchRequest(querySearch));
    console.log(querySearch);
    
  }, [querySearch])

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
    width: 60%;
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
          src="src/assets/busca/Lupa/Shape@2x.png"
          alt="aaaaa"
        ></Lupa>
        <SearchInput type="text" onChange={e => setQuerySearch(e.target.value)} value={querySearch} placeholder="Procure por heróis"></SearchInput>
      </WrapperSun>
    </Wrapper>
  );
};
