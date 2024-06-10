import styled from "styled-components"

const LoadingImg = styled.img`
position: relative;
top: 2rem;
width: 500;
@media (max-width: 800px) {
  width: 350px;
  top: 1.5rem;
}
`
const MainWrapper = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
/* position: relative */
height: 40rem;
`
const WrapperImage = styled.div`
display: flex;
justify-content: center;
align-items: center;
/* width: 50rem; */
height: 20rem;
background-color: black;
border-radius: 3rem;
`

export default function loading() {
  return (
    <MainWrapper>
        <WrapperImage>
        <LoadingImg width={500} src="/assets/loading/loading4.gif" alt="" />
    </WrapperImage>
      </MainWrapper>
    )
}
