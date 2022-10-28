import { Context, createContext, useEffect, useReducer, useState } from 'react';
import { IPhotoItem } from './ApiPhotoList';
import axios from 'axios';

interface IApiReducerState {
  isLoaded: boolean;
  data: IPhotoItem[];
  error: string;
}

interface IApiContextProps {
  state: IApiReducerState;
  dispatch: React.Dispatch<{ type: string; payload: IPhotoItem[] }>;
  searchQuery?: string;
  setSearchQuery?: React.Dispatch<string>;
  page?: number;
  setPage?: React.Dispatch<number>;
  per_page?: number;
  setPer_page?: React.Dispatch<number>;
  sortBy?: string;
  setSortBy?: React.Dispatch<string>;
  to_page?: number;
  setTo_page?: React.Dispatch<number>;
}

export const ApiContext: Context<IApiContextProps> = createContext({} as IApiContextProps);

const apiReducer = (state: IApiReducerState, action: { type: string; payload: IPhotoItem[] }) => {
  switch (action.type) {
    case 'Fetch_success':
      return {
        isLoaded: true,
        data: action.payload,
        error: '',
      };
    case 'Fetch_error':
      return {
        isLoaded: false,
        data: [],
        error: 'Data was not fetched!',
      };
    default:
      return state;
  }
};

export const ApiContextProvider: React.FC = ({ ...props }) => {
  const [searchQuery, setSearchQuery] = useState<string>(
    localStorage.getItem('searchApiDashboard')?.split(' ').join(',') || ''
  );

  const [per_page, setPer_page] = useState(20);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('relevance');

  const initialState = {
    isLoaded: false,
    data: [],
    error: '',
  };

  const [state, dispatch] = useReducer(apiReducer, initialState);

  useEffect(() => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=96d8b314f9c645b749401487147a15de&tags=${searchQuery}&tag_mode=AND&extras=url_l&format=json&nojsoncallback=1&sort=${sortBy}&page=${page}&per_page=${per_page}&extras=url_l,description,date_upload,tags,owner_name,views`
      )
      .then((response) => {
        dispatch({ type: 'Fetch_success', payload: response.data.photos.photo });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: 'Fetch_error', payload: [] });
      });
  }, [page, per_page, sortBy]);

  return (
    <ApiContext.Provider
      value={{
        state,
        dispatch,
        searchQuery,
        setSearchQuery,
        page,
        setPage,
        per_page,
        setPer_page,
        sortBy,
        setSortBy,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};
