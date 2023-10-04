import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../store";
import { loadRequest } from "../../store/modules/characters/actions";

const CharactersList: React.FC = () => {
  const characters = useSelector((state: ApplicationState) => state.characters.data);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadRequest());
    console.log(characters);
    
  }, []);

  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>{character.name}</li>
      ))}
    </ul>
  );
};

export default CharactersList;
