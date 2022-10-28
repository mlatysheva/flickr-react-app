import { useContext, useState } from 'react';
import { ThemeContext } from './Theme';

interface SearchProps {
  placeholder?: string;
}

export function SearchBar(props: SearchProps) {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('searchByContinent') || '');
  const theme = useContext(ThemeContext);

  return (
    <form className="search">
      <input
        id="search"
        className="search-field"
        placeholder={props.placeholder}
        onChange={(event) => {
          setSearchQuery(event.target.value);
          localStorage.setItem('searchByContinent', event.target.value);
        }}
        type="text"
        name="search"
        defaultValue={localStorage.getItem('searchByContinent') || ''}
      />
      <button
        style={{ background: theme.state.background, color: theme.state.foreground }}
        className="search-button"
        onClick={(e) => {
          setSearchQuery(e.currentTarget.value);
          localStorage.setItem('searchByContinent', searchQuery);
        }}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
