import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../store";
import { loadRequest } from "../../store/modules/characters/actions";
import CharacterCard from "../CharactersCard";
import styled from "styled-components";
import Loading from "../Loading";

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
  console.log(characters);
  

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
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </MainWrapper>
      )}
    </div>
  );
};

export default CharactersList;
