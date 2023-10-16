import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ApplicationState } from "../store";
import NavSearch from "../components/NavSearch";



const Character = () => {
  const characters = useSelector((state: ApplicationState) => state.characters.data);
  const { id } = useParams();
  const character = characters.filter((character) => character.id === Number(id));
  console.log(character);
  
  
  
  return (
    <div>
      <NavSearch />
      {character.map((character) => (

       <p>{character.name}</p> 
))}
        {id}
    </div>
  );
};

export default Character;