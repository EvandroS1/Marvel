import styled from "styled-components";


const MainWrapper = styled.div`
grid-column: 2 / span 2;
width: 100%;
justify-content: center;
margin-bottom: 4rem;
`


const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  background-color: red;
  color: white;
  padding: 8px 16px;
  margin: 0 5px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  &:hover {
    transition: 400ms;
    background-color: #000000;
    /* color: #000000; */
    
  }
`;


interface PaginationProps {
  heroesPerPage: number;
  totalHeroes: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ heroesPerPage, totalHeroes, paginate }) => {
  const pageNumbers = Math.ceil(totalHeroes / heroesPerPage);

  return (
    <MainWrapper>
      <PaginationContainer>
        {Array.from({ length: pageNumbers }).map((_, index) => (
          <PaginationButton key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </PaginationButton>
        ))}
      </PaginationContainer>
    </MainWrapper>
  );
};

export default Pagination