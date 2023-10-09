import styled from "styled-components"
import { Characters } from "../../store/modules/characters/types"

const MainWrapper = styled.div`
display: flex;
flex-direction: column;
width: 20rem;
cursor: pointer;
`
const widhtImg = {
  width: '100%',
}
const SecondWraper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 4rem;
border-top: solid 3px red;
margin-bottom: 3rem;
`
const Image = styled.div`
height: 15rem;
overflow: hidden;
border-radius: 2rem 2rem 0 0;
`
const P = styled.p`
font-weight: 700;
`
const Heart = styled.img `
  cursor: pointer;
`

const CharacterCard: React.FC<{ character: Characters }> = ({ character }) => {
  return (
    <MainWrapper>
      <Image><img style={widhtImg} src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" /></Image>
      <div>
        <SecondWraper>
          <P>{character.name}</P>
          <Heart height={25} src="../../../src/assets/icones/heart/Path Copy 2@3x.png" alt="" />
        </SecondWraper>
      </div>
    </MainWrapper>
  );
};

export default CharacterCard
