import List from './List';
import SearchBar from './SearchBar';
import { useEffect, useState } from 'react';
import { data } from './G20Data';
import { useAppDispatch, useAppSelector } from '../hooks';

type TitleProps = {
  title: string;
  children?: string;
};

export const Title = ({ title = '' }: TitleProps) => <h1>{title}</h1>;

function Home() {
  const [searchByContinentQuery, setSearchQuery] = useState(
    localStorage.getItem('searchByContinent') || ''
  );
  const parameters = useAppSelector((state) => state.apiSearch);
  const photos = useAppSelector((state) => state.photos);

  return (
    <div className="main">
      <Title title="G20 Countries" />
      <p>Filter G20 members by continent:</p>
      <SearchBar placeholder={'Enter continent'} />
      <List searchQuery={searchByContinentQuery} data={data} />
    </div>
  );
}

export default Home;
