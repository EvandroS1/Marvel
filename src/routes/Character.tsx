import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ApplicationState, DataState } from "../store";
import NavSearch from "../components/NavSearch";
import styled from "styled-components";
import { loadComicsRequest } from "../store/modules/comics/actions";
import ComicList from "../components/ComicList";
import { useEffect } from "react";
import { loadSearchByRequest } from "../store/modules/characters/actions";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 8rem;
  padding-inline: 8rem;
`;
const HeaderA = styled.div`
  width: 50%;
`;
const HeaderB = styled.div``;
const DetailsP = styled.p``;
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
  const serachValue = useSelector(
    (state: DataState) => state.data.data
  );
  console.log('serachvalue', serachValue);
  console.log('heroes', characters);
  
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
    
  }, [])
  

  const character = characters.filter(
    (character) => character.id === Number(id)
  );
  // console.log('kl',character);

  return (
    <div>
      <NavSearch />
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
              <img
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
  );
};

export default Character;
