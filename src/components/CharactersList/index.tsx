import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../store";
import { loadRequest } from "../../store/modules/characters/actions";
import CharacterCard from "../CharactersCard";
import styled from "styled-components";

const CharactersList: React.FC = () => {
  const characters = useSelector((state: ApplicationState) => state.characters.data);
  const dispatch = useDispatch();

  const MainWrapper = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 2rem;
  `


  useEffect(() => {
    dispatch(loadRequest());
    
  }, [dispatch]);
  
  // useEffect(() => {
  //   console.log(characters);
  // }, [characters]);

  return (
    <MainWrapper>
    {characters.map((character) => (
      <CharacterCard key={character.id} character={character} />
    ))}
  </MainWrapper>
  );
};

export default CharactersList;
