import { useContext } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { setSearchPhotoQuery } from '../features/apiSearchSlice';
import { getPhotos } from '../features/photoSlice';
import { ThemeContext } from './Theme';

interface ApiSearchProps {
  placeholder?: string;
}

export function ApiSearch(props: ApiSearchProps) {
  const theme = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const searchParameters = useAppSelector((state) => state.apiSearch);

  return (
    <form
      className="search"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(getPhotos(searchParameters));
        dispatch(setSearchPhotoQuery(localStorage.getItem('searchApiDashboard') || ''));
      }}
    >
      <input
        id="search"
        className="search-field"
        placeholder={props.placeholder}
        type="text"
        name="search"
        defaultValue={localStorage.getItem('searchApiDashboard') || ''}
        onChange={(event) => {
          localStorage.setItem('searchApiDashboard', event.target.value);
        }}
      />
      <button
        style={{ background: theme.state.background, color: theme.state.foreground }}
        className="search-button"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
