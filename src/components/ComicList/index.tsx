import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ComicGlobalState } from "../../store";
import styled from "styled-components";
import Loading from "../Loading";
import Pagination from "../Pagination";
import ComicCard from "../ComicCard";


const MainWrapper = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 14rem;
`;

const ComicList: React.FC = () => {
  const comic = useSelector((state: ComicGlobalState) => state.comics.data);
  // console.log('list',comic);
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // console.log(characters);
  const [currentPage, setCurrentPage] = useState(1);
  const heroesPerPage = 8;
  
  const indexOfLastHero = currentPage * heroesPerPage;
  const indexOfFirstHero = indexOfLastHero - heroesPerPage;
  const currentComics = comic.slice(indexOfFirstHero, indexOfLastHero);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if(comic.length > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [comic]);

  return ( 
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <MainWrapper>
          {currentComics.map((comic) => (
            <ComicCard key={comic.id} comic={comic}/>
          ))}
          <Pagination
            heroesPerPage={heroesPerPage}
            totalHeroes={comic.length}
            paginate={paginate}
          />
        </MainWrapper>
      )}
    </div>
  );
};

export default ComicList;
