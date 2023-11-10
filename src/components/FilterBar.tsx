import { useSelector } from "react-redux";
import styled from "styled-components";
import { ApplicationState, DataState } from "../store";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  loadOrderbyRequest,
  loadSearchOrderbyRequest,
} from "../store/modules/characters/actions";

export default function FilterBar() {
  const characters = useSelector(
    (state: ApplicationState) => state.characters.data
  );
  const querySearchValue = useSelector((state: DataState) => state.data.data);
  const [query, setQuery] = useState("");
  // const query = querySearchValue.toString()
  // console.log('query', query);

  const [orderby, setOrderby] = useState(false);
  const heroes = characters.length;
  // const queryValue =  querySearchValue
  const dispatch = useDispatch();
  useEffect(() => {
    setQuery(querySearchValue?.toString());
  }, [querySearchValue]);

  const handleClick = () => {
    toggleImage()
    if (query.length === 0) {
      if (orderby === true) {
        dispatch(loadOrderbyRequest(orderby));
        setOrderby(false);
        console.log("false", orderby);
      }
      if (orderby === false) {
        dispatch(loadOrderbyRequest(orderby));
        setOrderby(true);
        console.log("true", orderby);
      }
    }
    if (query.length > 0) {
      if (orderby === true) {
        dispatch(loadSearchOrderbyRequest(orderby, query));
        setOrderby(false);
        console.log("false", orderby);
      }
      if (orderby === false) {
        dispatch(loadSearchOrderbyRequest(orderby, query));
        setOrderby(true);
        console.log("true", orderby);
      }
    }
  };
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
    color: #a1a1a1;
  `;
  const WrapperB = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    transform: scale();
    width: 19rem;
  `;
  const FirstWrapperB = styled.div`
    width: 13rem;
    display: flex;
    justify-content: space-around;
  `;
  const FirstWrapperBA = styled.a`
    text-decoration: none;
    color: red;
    cursor: initial;
  `;
  const SecondWrapperB = styled.div`
    height: 1.7rem;
  `;
  const ToggleImg = styled.img`
    cursor: pointer;
  `;
  const [isFirstImageVisible, setFirstImageVisible] = useState(true);

  // Função para alternar entre as imagens
  const toggleImage = () => {
    setFirstImageVisible(!isFirstImageVisible);
  };

  // URL das duas imagens
  const firstImageUrl = "/assets/toggle/Group 6@3x.png";
  const secondImageUrl = "/assets/toggle/Group 2@3x.png";

  return (
    <MainWrapper>
      <WrapperA>
        <p>Encontrados {heroes} heróis</p>
      </WrapperA>
      <WrapperB>
        <FirstWrapperB>
          <img
            height={25}
            src="/assets/icones/heroi/noun_Superhero_2227044@3x.png"
            alt="simbolo de heroi"
          />
          <FirstWrapperBA
            style={{ color: "red", textDecoration: "none" }}
          >
            Ordenar por nome - A/Z
          </FirstWrapperBA>
        </FirstWrapperB>
        <SecondWrapperB>
          <ToggleImg
            height={30}
            src={isFirstImageVisible ? firstImageUrl : secondImageUrl}
            alt="simbolo de heroi"
            onClick={handleClick}
          />
        </SecondWrapperB>
      </WrapperB>
    </MainWrapper>
  );
}
