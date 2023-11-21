import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ApplicationState, DataState } from "../store";
import NavSearch from "../components/NavSearch";
import styled from "styled-components";
import { loadComicsRequest, setNoneComic } from "../store/modules/comics/actions";
import ComicList from "../components/ComicList";
import { useEffect, useState } from "react";
import { loadSearchByRequest } from "../store/modules/characters/actions";
import CharactersList from "../components/CharactersList";
import Footer from "../components/Footer";
import { setNoneSearchValue } from "../store/modules/dados/actions";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/assets/backCharacter.jpg");
  background-repeat: repeat; /* Esta linha faz a imagem se repetir para cobrir completamente o contêiner */
`;



const MainWrapper = styled.div`
width: 80%;
  display: flex;
  flex-direction: column;
  padding-inline: 8rem;
  `;
const HeaderWrapper = styled.div`
background-color: white;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 50% 50%;
  margin-top: 8rem;
  border-radius: 3rem;
  height: 40rem;
  /* width: 100%; */
`;
const HeaderA = styled.div`
display: flex;
flex-direction: column;
  width: 80%;
  justify-content: center;
  align-items: center;
`;
const HeaderB = styled.div`
display: flex;
flex-direction: column;
  justify-content: center;
  align-items: center;`;
const DetailsP = styled.p``;
const HeaderBImage = styled.img`
border-radius: 3rem;`;
// ------------------------GRID------------------------
const GridContainer = styled.div`
  display: grid;
  margin-top: 3rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto auto;
  gap: 10px; /* Espaçamento entre as células do grid */
`;

const GridItem = styled.div`
  padding: 0px 10px 10px 0;
`;

const FirstRowItem = styled(GridItem)``;

const SecondRowItem = styled(GridItem)``;

// ------------------------GRID------------------------

const Character = () => {
  const characters = useSelector(
    (state: ApplicationState) => state.characters.data
  );
  
  const searchValue = useSelector((state: DataState) => state.data.data);
  let searchV = searchValue
  // console.log("searchValue", searchValue.length, searchValue);
  // console.log("heroes", characters);

  const { id } = useParams();
  const dispatch = useDispatch();

  if (id) {
    dispatch(loadComicsRequest(id));
  }
  useEffect(() => {
    if (id) {
      dispatch(loadSearchByRequest(id));
      console.log("foi");
    }
  }, []);

  const character = characters.filter(
    (character) => character.id === Number(id)
  );
  const [search, setSearch] = useState<boolean>(false)
  // const [primeiraAtt, setPrimeiraAtt] = useState<boolean>(true)
  useEffect(() => {
    if(searchValue.length >= 1){
      setSearch(true)
    } else {
      if(searchV.length < 1 && id){
        dispatch(loadSearchByRequest(id))
        setSearch(false)
        // dispatch(setInnitial())
      }
      if(character){
      }
    }
      // setPrimeiraAtt(true)
      // setSearch(false)
  }, [characters.length])
  useEffect(() => {
        if(id){
          dispatch(loadSearchByRequest(id))
          dispatch(setNoneSearchValue())
          dispatch(setNoneComic())
          setSearch(false)
        }
  }, [id])
  // if (characters.length > 2) {
  //   search = true;
  // }
  // if (characters.length === 1) {
  //   search = false;
  // }
  // console.log('kl',character);

  return (
      <div>
        <NavSearch isNavSearch={false} />
            <Background>
        {search ? (
          <CharactersList />
        ) : (
          <div>
            <MainWrapper>
              {character.map((character) => (
                <HeaderWrapper key={character.id}>
                  <HeaderA>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <h2 style={{ fontSize: "2.4rem" }}>{character.name}</h2>{" "}
                    </div>
                    <DetailsP>{character.description}</DetailsP>
                    <GridContainer>
                      <FirstRowItem>
                        Quadrinhos <br />{" "}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                          }}
                        >
                          <img
                            width={30}
                            src="/assets/icones/book/Group@3x.png"
                            alt="logo quadrinhos"
                          />
                          {character.comics.available}
                        </div>
                      </FirstRowItem>
                      <SecondRowItem>
                        Filmes <br />{" "}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                          }}
                        >
                          <img
                            width={30}
                            src="/assets/icones/video/Shape@3x.png"
                            alt="logo filmes"
                          />
                          {character.series.available}
                        </div>
                      </SecondRowItem>
                    </GridContainer>
                  </HeaderA>
                  <HeaderB>
                    <HeaderBImage
                      width={500}
                      src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                      alt="Hero Image"
                    />
                  </HeaderB>
                </HeaderWrapper>
              ))}
            </MainWrapper>
            <ComicList />
          </div>
        )}
            </Background>
            <Footer />
      </div>
  );
};

export default Character;
