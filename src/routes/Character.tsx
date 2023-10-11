import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ApplicationState } from "../store";
import { SearchBar } from "../components/SearchBar";
import styled from "styled-components";

const Nav = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`

const Character = () => {
  const characters = useSelector((state: ApplicationState) => state.characters.data);
  const { id } = useParams();
  const character = characters.filter((character) => character.id === Number(id));
  console.log(character);

  
  return (
    <div>
      <Nav>
        <Link to='/'><img height={140} src="/src/assets/logo/Group@3x.png" alt="marvel logo" /></Link>
        < SearchBar />
      </Nav>
      {character.map((character) => (

       <p>{character.name}</p> 
))}
        {id}
    </div>
  );
};

export default Character;