import styled from "styled-components"

const LoadingImg = styled.img`
position: relative;
top: -0.46rem;
width: 500;
@media (max-width: 800px) {
  width: 350px;
  top: 1.2rem;
}
`
const MainWrapper = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
/* position: relative */
height: 40rem;
@media (max-width: 800px) {
  width: 100%;
}
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
        <LoadingImg src="/assets/empty.gif" alt="" />
    </WrapperImage>
      </MainWrapper>
    )
}
