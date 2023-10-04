import styled from "styled-components";
import "./App.css";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { Provider } from "react-redux";
import store from "./store";

import CharactersList from "./components/CharactersList";

function App() {
  const MainWrapper = styled.div`
    padding-inline: 2rem;
  `;

  return (
    <Provider store={store}>
      <MainWrapper>
        <Header />
        <SearchBar />
        <FilterBar />
        <CharactersList />
      </MainWrapper>
    </Provider>
  );
}

export default App;
