import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ComicGlobalState } from "../../store";
import styled from "styled-components";
import Loading from "../Loading";
import Pagination from "../Pagination";
import ComicCard from "../ComicCard";
import Empty from "../Empty";

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 14rem;
  /* @media (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 8rem;
  }

  @media (max-width: 599px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  */
`;

const ComicList: React.FC = () => {
  const comic = useSelector((state: ComicGlobalState) => state.comics.data);
  const loadig = useSelector((state: ComicGlobalState) => state.comics.loading);
  const [currentPage, setCurrentPage] = useState(1);
  const heroesPerPage = 8;

  const indexOfLastHero = currentPage * heroesPerPage;
  const indexOfFirstHero = indexOfLastHero - heroesPerPage;
  const currentComics = comic.slice(indexOfFirstHero, indexOfLastHero);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {loadig ? (
        <Loading />
      ) : (
        <div>
          {currentComics.length === 0 ? (
            <Empty />
          ) : (
            <MainWrapper>
              {currentComics.map((comic) => (
                <ComicCard key={comic.id} comic={comic} />
              ))}
              <Pagination
                heroesPerPage={heroesPerPage}
                totalHeroes={comic.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </MainWrapper>
          )}
        </div>
      )}
    </div>
  );
};

export default ComicList;
