import styled from "styled-components"

export default function FilterBar() {
  const heroes = 20;

  const MainWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: red;
    padding-top: 6rem;
  `;
  const WrapperA = styled.div`
  font-weight: 700;
  color: #a1a1a1;`;
  const WrapperB = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  transform: scale();
  width: 33rem;
  `;
  const FirstWrapperB = styled.div`
  width: 13rem;
  display: flex;
  justify-content: space-around;
  `
  // const FirstWrapperBA = styled.a`
  // text-decoration: none;
  // color: red;
  // `
  const SecondWrapperB = styled.div`
  height: 1.7rem;
  `
  const ThirdWrapperB = styled.div`
  width: 10.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  `
  const ToggleImg = styled.img`
  cursor: pointer;
  `
  
  return (
    <MainWrapper>
      <WrapperA><p>Encontrados {heroes} heróis</p></WrapperA>
      <WrapperB>
        <FirstWrapperB>
          <ToggleImg height={25} src="/src/assets/icones/heroi/noun_Superhero_2227044@3x.png" alt="simbolo de heroi" />
          <a style={{color: 'red', textDecoration: 'none'}} href="">Ordenar por nome - A/Z</a>
        </FirstWrapperB>
        <SecondWrapperB><ToggleImg height={30} src="/src/assets/toggle/Group 2@3x.png" alt="" /></SecondWrapperB>
        <ThirdWrapperB>
          <img height={20} src="/src/assets/icones/heart/Path Copy 7@3x.png" alt="" />
          <p>Somente favoritos</p>
        </ThirdWrapperB>
      </WrapperB>
    </MainWrapper>
  )
}
