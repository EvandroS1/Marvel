import styled from "styled-components";
import { Characters } from "../../store/modules/characters/types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setInputSearchValue } from "../../store/modules/dados/actions";


const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  border-radius: 2rem;
  width: 20rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 500ms;
    box-shadow: 0 0 4px black;
  }
`;


const widhtImg = {
  width: "100%",
};

const SecondWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  border-top: solid 3px red;
  margin-bottom: 3rem;
`;

const Image = styled.div`
  height: 15rem;
  overflow: hidden;
  border-radius: 2rem 2rem 0 0;
  `;

const P = styled.p`
  font-weight: 700;
  color: red;
  `;

const Heart = styled.img`
  cursor: pointer;
  `;

const NoUnderlineLink = styled(Link)`
  text-decoration: none;
  `;

const CharacterCard: React.FC<{ character: Characters }> = ({ character }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setInputSearchValue(character.name))
    console.log('character name', character.name);
    
    
  }
  return (
    <NoUnderlineLink onClick={() => handleClick()} to={`character/${character.id}`}>
      <MainWrapper>
        <Image>
          <img
            style={widhtImg}
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt=""
          />
        </Image>
        <div>
          <SecondWraper>
            <P>{character.name}</P>
            <Heart height={25} src="../../../src/assets/icones/heart/Path Copy 2@3x.png" alt="" />
          </SecondWraper>
        </div>
      </MainWrapper>
    </NoUnderlineLink>
  );
};

export default CharacterCard;
