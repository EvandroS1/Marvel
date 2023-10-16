import { useSelector } from "react-redux";
import styled from "styled-components"
import { ApplicationState, DataState } from "../store";
import { useDispatch } from "react-redux";
import {  useState } from "react";
import { loadOrderbyRequest, loadSearchOrderbyRequest } from "../store/modules/characters/actions";

export default function FilterBar() {
  const characters = useSelector((state: ApplicationState) => state.characters.data);
  const  querySearchValue = useSelector((state: DataState) => state.data.data)
  const query = querySearchValue.toString()
  // console.log('query', query);

  const [orderby, setOrderby] = useState(false)
  const heroes = characters.length;
  // const queryValue =  querySearchValue
  const dispatch = useDispatch()

  const handleClick = () => {
    if(query !== '') {
      if (orderby === true) {
        dispatch(loadOrderbyRequest(true))
        setOrderby(false)
        console.log('vazio');
      } 
      if (orderby === false) {
        dispatch(loadOrderbyRequest(false))
        setOrderby(true)
      }
    } else {
      if (orderby === true) {
        dispatch(loadSearchOrderbyRequest(true, query))
        setOrderby(false)
        console.log('com valor');
      } 
      if (orderby === false) {
        dispatch(loadSearchOrderbyRequest(false, query))
        setOrderby(true)
      }
    }
  } 
  // useEffect(() => {
  //   dispatch(setInputSearchValue(queryValue))
  //   console.log('hello',queryValue);
    
  // }, [queryValue])

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
  const FirstWrapperBA = styled.a`
  text-decoration: none;
  color: red;
  cursor: pointer;
  `
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
          <FirstWrapperBA style={{color: 'red', textDecoration: 'none'}} onClick={() => handleClick()}>Ordenar por nome - A/Z</FirstWrapperBA>
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
