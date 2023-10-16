import { Provider } from "react-redux";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { SearchBar } from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import CharactersList from "./components/CharactersList";
import store from "./store";

const MainWrapper = styled.div`
  padding-inline: 2rem;
  text-align: center;
`;

function App() {

  return (
    <Provider store={store}>
      <MainWrapper>
        <Header />
        <SearchBar />
        <FilterBar />
        <Outlet />
        <CharactersList />
      </MainWrapper>
    </Provider>
  );
}

export default App;
