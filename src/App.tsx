import { Provider, useDispatch, useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { Outlet } from "react-router-dom";
import { SearchBar } from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import CharactersList from "./components/CharactersList";
import store from "./store";
import { GeistProvider } from "@geist-ui/core";
import CssBaseline from "@geist-ui/core/esm/css-baseline";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { QuerySearchState } from "./store/modules/dados/types";
import { setThemee } from "./store/modules/dados/actions";
import { loadRequest } from "./store/modules/characters/actions";
import { IconButton } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


const lightTheme = {
  backgroundColor: "#fff",
  color: "#000",
};

const darkTheme = {
  backgroundColor: "black",
  color: "white",
};

const MainWrapper = styled.div`
  padding-inline: 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  `;
  const ThemeWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  `;

function App() {
  const savedTheme = localStorage.getItem("theme") || 'light';
  const [theme, setTheme] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    setTheme(savedTheme)
    dispatch(loadRequest())
  }, []);
  
    const handleToggleTheme = () => {
  if (savedTheme === "dark") {
    localStorage.setItem("theme", "light");
    setTheme('light') // Salva o tema escolhido
    dispatch(setThemee(theme))
  }
  if (savedTheme === "light") {
    localStorage.setItem("theme", "dark");
    setTheme('dark') // Salva o tema escolhido
    dispatch(setThemee(theme))
  }
};


  return (
    <Provider store={store}>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <GeistProvider>
          <CssBaseline />
          <MainWrapper>
            <ThemeWrapper>
            <IconButton onClick={handleToggleTheme} color="inherit">
              {theme === "dark" ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
            </ThemeWrapper>
            <Header /> 
            <SearchBar />
            <FilterBar />
            <Outlet />
            <CharactersList />
          </MainWrapper>
        </GeistProvider>
      </ThemeProvider>
      <Footer/>
    </Provider>
  );
}

export default App;
