import styled from "styled-components";
const DivHeader = styled.div`
  width: 100%;
`;
const H1Header = styled.h1`
`;
const PHeader = styled.p`
  color: gray;
`;

const Header = () => {
  
  return (
    <DivHeader>
      <img width={400} src="/public/assets/logo/Group@3x.png" alt="Logo Marvel" />
      <H1Header> EXPLORE O UNIVERSO</H1Header>
      <PHeader>
        Mergulhe no domínio Deslumbrante de todos os Personagens clássicos que
        você ama e aqueles que você descobrirá em breve!
      </PHeader>
    </DivHeader>
  );
};

export default Header;
