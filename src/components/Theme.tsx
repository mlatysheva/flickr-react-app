import React, { useContext, useReducer, Context, useEffect } from 'react';

export interface Theme {
  foreground: string;
  background: string;
}

interface IContextProps {
  state: Theme;
  dispatch: React.Dispatch<{ type: string }>;
}

export const light_theme: Theme = {
  foreground: '#000000',
  background: '#eeeeee',
};

export const dark_theme: Theme = {
  foreground: '#ffffff',
  background: '#191970',
};

export const ThemeContext: Context<IContextProps> = React.createContext({} as IContextProps);

const themeReducer = (state: Theme, action: { type: string }): Theme => {
  switch (action.type) {
    case 'darkMode':
      return dark_theme;
    case 'lightMode':
      return light_theme;
    default:
      return state;
  }
};

const initialState: Theme = light_theme;
// if (localStorage.getItem('theme') !== null) {
//   const savedTheme = localStorage.getItem('theme');
//   initialState = JSON.parse(savedTheme!);
// } else initialState = dark_theme;

export const ThemeProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(state));
  }, [state]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>{props.children}</ThemeContext.Provider>
  );
};

export const ThemeSelector = () => {
  const theme = useContext(ThemeContext);

  const changeTheme = () => {
    const themeSelector = document.querySelector('.theme-selector');
    if (themeSelector?.classList.contains('theme-dark')) {
      themeSelector.classList.remove('theme-dark');
      theme.dispatch({ type: 'lightMode' });
    } else {
      themeSelector?.classList.add('theme-dark');
      theme.dispatch({ type: 'darkMode' });
    }
  };

  return <div className="theme-selector theme-dark" onClick={changeTheme}></div>;
};
