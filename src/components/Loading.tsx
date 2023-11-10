import styled from "styled-components"

const LoadingImg = styled.img`
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -10%);
`
const MainWrapper = styled.div`
position: relative;
`

export default function loading() {
  return (
    <MainWrapper>
      <LoadingImg width={500} src="/assets/loading/loading4.gif" alt="" />
    </MainWrapper>
    )
}
