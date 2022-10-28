import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { goToPage, setPerPage, setSortBy } from '../features/apiSearchSlice';

export const ApiDashboard: FC = () => {
  return (
    <form className="search">
      <NumberPerPage />
      <GoToPage />
      <SortBy />
    </form>
  );
};

export const SortBy = () => {
  const dispatch = useAppDispatch();
  // const sortBy = useAppSelector((state) => state.apiSearch.sortBy);

  return (
    <div className="form-entry">
      <label htmlFor="sortBy">Sort by:</label>
      <select
        className="form-input-field search-parameter"
        placeholder="Sort by"
        defaultValue={localStorage.getItem('sortBy') || 'relevance'}
        onChange={(event) => {
          dispatch(setSortBy(event.target.value));
          localStorage.setItem('sortBy', event.target.value);
        }}
      >
        <option value="relevance">Most Relevant First</option>
        <option value="interestingness-desc">Most Interesting First</option>
        <option value="date-taken-desc">Most Recent First</option>
      </select>
    </div>
  );
};

export const NumberPerPage = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="form-entry">
      <label htmlFor="perPage">Photos per page:</label>
      <select
        className="form-input-field search-parameter"
        placeholder="Photos per page"
        defaultValue={localStorage.getItem('apiPerPage') || 20}
        onChange={(event) => {
          dispatch(setPerPage(event.target.value));
          localStorage.setItem('apiPerPage', event.target.value);
        }}
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={40}>40</option>
      </select>
    </div>
  );
};

export const GoToPage = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="form-entry">
      <label htmlFor="toPage">Go to page (max 50):</label>
      <input
        className="form-input-field search-parameter"
        placeholder="Go to page"
        defaultValue={localStorage.getItem('apiPage') || 1}
        type="number"
        min="1"
        max="50"
        step="1"
        onChange={(event) => {
          dispatch(goToPage(event.target.value));
          localStorage.setItem('apiPage', event.target.value);
        }}
      />
    </div>
  );
};
