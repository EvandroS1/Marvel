import styled from "styled-components";

export const SearchBar = () => {
  
  const SearchInput = styled.input`
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
    `;
  const WrapperSun = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  `
  const Lupa = styled.img`
    position: absolute;
    left: 15px;
  `;
  return (
    <Wrapper>
      <WrapperSun>
        <Lupa height={25} src='src/assets/busca/Lupa/Shape@2x.png' alt="aaaaa"></Lupa>
        <SearchInput placeholder="Procure por heróis"></SearchInput>
      </WrapperSun>
    </Wrapper>
  );
};
