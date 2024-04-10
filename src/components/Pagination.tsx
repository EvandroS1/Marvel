import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  grid-column: 2 / span 2;
  width: 100%;
  justify-content: center;
  margin-bottom: 4rem;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button<{ isSelected?: boolean }>`
  background-color: ${(props) => (props.isSelected ? "black" : "red")};
  color: white;
  padding: 8px 16px;
  margin: 0 5px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  &:hover {
    transition: 400ms;
    background-color: ${(props) => (props.isSelected ? "black" : "#000000")};
  }
`;

interface PaginationProps {
  heroesPerPage: number;
  totalHeroes: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ heroesPerPage, totalHeroes, currentPage, paginate }) => {
  const pageNumbers = Math.ceil(totalHeroes / heroesPerPage);

  const generatePageNumbers = () => {
    const pagesToShow = 5;
    const middlePage = Math.ceil(pagesToShow / 2);
    const pages = [];

    if (pageNumbers <= pagesToShow) {
      for (let i = 1; i <= pageNumbers; i++) {
        pages.push(i);
      }
    } else if (currentPage <= middlePage) {
      for (let i = 1; i <= pagesToShow; i++) {
        pages.push(i);
      }
      if (pageNumbers > pagesToShow) {
        pages.push("...");
      }
    } else if (currentPage > pageNumbers - middlePage) {
      if (pageNumbers > pagesToShow) {
        pages.push("...");
      }
      for (let i = pageNumbers - pagesToShow + 1; i <= pageNumbers; i++) {
        pages.push(i);
      }
    } else {
      if (pageNumbers > pagesToShow) {
        pages.push("...");
      }
      for (let i = currentPage - middlePage + 1; i <= currentPage + middlePage - 1; i++) {
        pages.push(i);
      }
      if (pageNumbers > currentPage + middlePage) {
        pages.push("...");
      }
    }

    return pages;
  };

  return (
    <MainWrapper>
      <PaginationContainer>
        {currentPage > 2 && (
          <PaginationButton onClick={() => paginate(1)} disabled={currentPage === 1}>
            {"<<"}
          </PaginationButton>
        )}
        {generatePageNumbers().map((pageNumber, index) => (
          <PaginationButton
            key={index}
            onClick={() => (typeof pageNumber === "number" ? paginate(pageNumber) : null)}
            isSelected={pageNumber === currentPage}
          >
            {pageNumber}
          </PaginationButton>
        ))}
        {currentPage < pageNumbers - 1 && (
          <PaginationButton onClick={() => paginate(pageNumbers)} disabled={currentPage === pageNumbers}>
            {">>"}
          </PaginationButton>
        )}
      </PaginationContainer>
    </MainWrapper>
  );
};

export default Pagination;
