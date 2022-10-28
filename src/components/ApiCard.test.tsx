import { render, screen } from '@testing-library/react';
import { ApiCard } from './ApiCard';
import { MemoryRouter } from 'react-router-dom';

describe("ApiCard", () => {
  it("renders ApiCard component", () => {
    render(<MemoryRouter>
      <ApiCard id={'51992273600'} dateupload={'1649484030'} title={'8_DSC2660'} thumbnail={'https://live.staticflickr.com/65535/51992273600_0f8b1b4242_t.jpg'} large_url={'https://live.staticflickr.com/65535/51992273600_0f8b1b4242.jpg'} original_url={'https://live.staticflickr.com/65535/51992273600_0f8b1b4242_b.jpg'} />
    </MemoryRouter>);
    expect(screen.getAllByText(/8_DSC2660/i)[0]).toBeInTheDocument();
  })
})

test ("ApiPage as fragment matches the snapshot", () => {
  const { asFragment } = render(<MemoryRouter>
    <ApiCard id={'51956937593'} dateupload={"1648062917"} title={'Svínafellsjökull Glacier'} thumbnail={'https://live.staticflickr.com/65535/51956937593_4f1f3594b1_t.jpg'} large_url={'https://live.staticflickr.com/65535/51956937593_4f1f3594b1.jpg'} original_url={'https://live.staticflickr.com/65535/51956937593_4f1f3594b1_b.jpg'} />
  </MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
})

export {};
