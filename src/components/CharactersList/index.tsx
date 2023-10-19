import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../store";
import { loadRequest } from "../../store/modules/characters/actions";
import CharacterCard from "../CharactersCard";
import styled from "styled-components";
import Loading from "../Loading";
import Pagination from "../Pagination";


const MainWrapper = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 2rem;
`;

const CharactersList: React.FC = () => {
  const characters = useSelector((state: ApplicationState) => state.characters.data);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // console.log(characters);
  const [currentPage, setCurrentPage] = useState(1);
  const heroesPerPage = 8;
  
  const indexOfLastHero = currentPage * heroesPerPage;
  const indexOfFirstHero = indexOfLastHero - heroesPerPage;
  const currentHeroes = characters.slice(indexOfFirstHero, indexOfLastHero);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(loadRequest());
  }, [dispatch]);

  useEffect(() => {
    if(characters.length > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [characters]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <MainWrapper>
          {currentHeroes.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
          <Pagination
            heroesPerPage={heroesPerPage}
            totalHeroes={characters.length}
            paginate={paginate}
          />
        </MainWrapper>
      )}
    </div>
  );
};

export default CharactersList;
