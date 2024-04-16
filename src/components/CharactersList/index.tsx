import React, {useState } from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import CharacterCard from "../CharactersCard";
import styled from "styled-components";
import Loading from "../Loading";
import Pagination from "../Pagination";
import Empty from "../Empty";

const MainWrapper = styled.div`
  display: flex;
  place-items: center;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  flex-wrap: wrap;
  gap: 2rem;
   /* @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 8rem;
  }

  @media (max-width: 599px) {
    grid-template-columns: 1fr;
  } */
`;

const CharactersList: React.FC = () => {
  const characters = useSelector((state: ApplicationState) => state.characters.data);
  const loading = useSelector((state: ApplicationState) => state.characters.loading);
  const [currentPage, setCurrentPage] = useState(1);
  const heroesPerPage = 8;

  const indexOfLastHero = currentPage * heroesPerPage;
  const indexOfFirstHero = indexOfLastHero - heroesPerPage;
  const currentHeroes = characters.slice(indexOfFirstHero, indexOfLastHero);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div>
      {characters.length === 0 ? (
        <Empty />
      ) : 
      (
        <div>
          {loading ? (
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
                currentPage={currentPage} // Adicione esta linha
              />
            </MainWrapper>
          )}
        </div>
      )}
      
    </div>
  );
};

export default CharactersList;
