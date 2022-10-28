import { render, screen, fireEvent } from '@testing-library/react';
import { ApiSearch } from './ApiSearch';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';

async function handleSearch(): Promise<void> {
  const searchQuery = 'Pink Floyd';
  const tags = searchQuery.split(' ').join(',');
  let isLoaded: boolean;

  if (searchQuery) {
    try {
      const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=96d8b314f9c645b749401487147a15de&tags=${tags}&extras=url_l&format=json&nojsoncallback=1&sort=relevance&page=1&per_page=20&extras=url_l,description,date_upload,tags,owner_name,views`;
      const response = await fetch(url);
      const data = await response.json();
      isLoaded = true 
    } catch (err) {
      console.error();
    }
  } else {
    isLoaded = true
  };
};

test("ApiSearch contains text and role element and renders user input", () => {
  render(<Provider store={store}><MemoryRouter>
    <ApiSearch />
  </MemoryRouter>
  </Provider>);

  expect(screen.getByText(/Search/i)).toBeInTheDocument(); 

  expect(screen.getByRole('button')).toBeInTheDocument();
  fireEvent.change(screen.getByRole("textbox"), {
    target: { value: "Pink Floyd" },
  });
})
