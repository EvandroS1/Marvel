import { Provider } from "react-redux";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { SearchBar } from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import CharactersList from "./components/CharactersList";
import store from "./store";
import { GeistProvider } from "@geist-ui/core";
import CssBaseline from "@geist-ui/core/esm/css-baseline";
import Footer from "./components/Footer";

const MainWrapper = styled.div`
  padding-inline: 2rem;
  text-align: center;
  `;

function App() {

  return (
    <Provider store={store}>
      <GeistProvider>
        <CssBaseline />
      <MainWrapper>
        <Header />
        <SearchBar ishome={true} isBarSearch={false}/>
        <FilterBar />
        <Outlet />
        <CharactersList />
      </MainWrapper>
      </GeistProvider>
      <Footer />
    </Provider>
  );
}

export default App;
