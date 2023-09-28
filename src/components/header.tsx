import styled from "styled-components";

const DivHeader = styled.div`
  width: 100vw;
`;
const H1Header = styled.h1`
  padding-right: 7rem;
`;

const Header = () => {
  return (
    <DivHeader>
      <img width={400} src="/src/assets/logo/Group@3x.png" alt="Logo Marvel" />
      <H1Header> EXPLORE O UNIVERSO</H1Header>
      <p>
        Mergulhe no domínio Deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá em breve!
      </p>
    </DivHeader>
  );
};

export default Header;
