import { render, fireEvent } from "@testing-library/react";
import App from "../App";
import { MemoryRouter } from 'react-router-dom';

describe("App", () => {
  
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => ''),
        setItem: jest.fn(() => '')
      },
      writable: true
    });
  });
  
  it("Should call localStorage getItem on render", () => {
    render(<MemoryRouter>
      <App />
    </MemoryRouter>);
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(3);
  });
  
  it("Should call localStorage setItem on input change", () => {
    const { queryByPlaceholderText } = render(<MemoryRouter>
      <App />
    </MemoryRouter>);

    const input = queryByPlaceholderText("Enter continent");
    fireEvent.change(input, { target: { value: "Europe" } });

    expect(window.localStorage.setItem).toHaveBeenCalledTimes(2);
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      "searchByContinent",
      "Europe"
    );
  });

});

export {};