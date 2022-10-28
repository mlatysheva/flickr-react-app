import { Context, createContext } from 'react';
import { ApiCardProps } from './ApiCard';

interface IApiCardContextProps {
  card: ApiCardProps;
  setCard?: React.Dispatch<ApiCardProps>;
}

export const ApiCardContext: Context<IApiCardContextProps> = createContext(
  {} as IApiCardContextProps
);
