import styled from "styled-components";
import { Comics } from "../../store/modules/comics/types";
// import { Link } from "react-router-dom";


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
  // const NoUnderlineLink = styled(Link)`
  // text-decoration: none;
  // `;

const comicCard: React.FC<{ comic: Comics }> = ({ comic }) => {
  
  return (
    // <NoUnderlineLink onClick={() => handleClick()} to={`character/${comic.id}`}>
      <MainWrapper>
        <Image>
          <img
            style={widhtImg}
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt=""
          />
        </Image>
        <div>
          <SecondWraper>
            <P>{comic.title}</P>
            <Heart height={25} src="/assets/icones/heart/Path Copy 2@3x.png" alt="" />
          </SecondWraper>
        </div>
      </MainWrapper>
      // </NoUnderlineLink>
  );
};

export default comicCard;
