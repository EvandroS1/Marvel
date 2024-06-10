// SearchPage.tsx
import CharactersList from '../components/CharactersList';
import FilterBar from '../components/FilterBar';
import NavSearch from '../components/NavSearch';

const SearchPage = () => {
  return (
    <div>
      <NavSearch/>
      <FilterBar />
      <CharactersList />
    </div>
  );
};

export default SearchPage;
