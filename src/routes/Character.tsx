import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ApplicationState, DataState } from "../store";
import NavSearch from "../components/NavSearch";
import styled, { ThemeProvider } from "styled-components";
import {
  loadComicsRequest,
  setNoneComic,
} from "../store/modules/comics/actions";
import ComicList from "../components/ComicList";
import { useEffect, useState } from "react";
import { loadSearchByRequest } from "../store/modules/characters/actions";
import CharactersList from "../components/CharactersList";
import Footer from "../components/Footer";
import { setNoneSearchValue, setThemee } from "../store/modules/dados/actions";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Background = styled.div`
  width: 100%;
  height: 100%;

  align-items: center;
  background-image: url("/assets/backCharacter.jpg");
  background-repeat: repeat; /* Esta linha faz a imagem se repetir para cobrir completamente o contêiner */
`;

const ThemeWrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  display: flex;
  width: 100%;
  justify-content: end;
`;

const CharacterWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CharacterInfo = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
  border-radius: 3rem;
  height: 100%;
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
  align-items: center;
`;

const DetailsP = styled.p``;
const HeaderBImage = styled.img`
  border-radius: 3rem;
  max-height: 80rem;
  max-width: 25rem;
  min-width: 10rem;
  width: 90%;
  margin-bottom: 3rem;
`;
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
  const [theme, setTheme] = useState("");
  let searchV = searchValue;

  const savedTheme = localStorage.getItem("theme") || "";
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
      // console.log("foi");
    }
  }, []);

  const character = characters.filter(
    (character) => character.id === Number(id)
  );
  const [search, setSearch] = useState<boolean>(false);
  // const [primeiraAtt, setPrimeiraAtt] = useState<boolean>(true)
  useEffect(() => {
    if (searchValue.length >= 1) {
      setSearch(true);
    } else {
      if (searchV.length < 1 && id) {
        dispatch(loadSearchByRequest(id));
        setSearch(false);

        // dispatch(setInnitial())
      }
      if (character) {
      }
    }
    // setPrimeiraAtt(true)
    // setSearch(false)
  }, [characters.length]);
  useEffect(() => {
    if (id) {
      dispatch(loadSearchByRequest(id));
      dispatch(setNoneSearchValue());
      dispatch(setNoneComic());
      setSearch(false);
    }
  }, [id]);
  useEffect(() => {
    if (search === false) {
    }
  }, [loadSearchByRequest]);

  const handleToggleTheme = () => {
    if (savedTheme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light"); // Salva o tema escolhido
      dispatch(setThemee(theme));
    }
    if (savedTheme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark"); // Salva o tema escolhido
      dispatch(setThemee(theme));
    }
  };

  return (
    <div>
      <ThemeProvider
        theme={{
          color: savedTheme === "dark" ? "white" : "black",
          backgroundColor: savedTheme === "dark" ? "black" : "white",
        }}
      >
        <ThemeWrapper>
          <IconButton onClick={handleToggleTheme} color="inherit">
            {savedTheme === "dark" ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </ThemeWrapper>
        <NavSearch />
        <Background>
          {search ? (
            <CharactersList />
          ) : (
            <div>
              <CharacterWrapper>
                <CharacterInfo>
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
                          <h2 style={{ fontSize: "2.4rem" }}>
                            {character.name}
                          </h2>{" "}
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
                          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                          alt="Hero Image"
                        />
                      </HeaderB>
                    </HeaderWrapper>
                  ))}
                </CharacterInfo>
              </CharacterWrapper>
              <ComicList />
            </div>
          )}
        </Background>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Character;
