import React, {useState } from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import CharacterCard from "../CharactersCard";
import styled from "styled-components";
import Loading from "../Loading";
import Pagination from "../Pagination";
import Empty from "../Empty";

const MainWrapper = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 2rem;
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
