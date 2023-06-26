import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';

export type PriceType = string | null;

const defaultPrice: PriceType = '';

interface IPriceContext {
  price: PriceType;
  setPrice: Dispatch<SetStateAction<PriceType>>;
}

const PriceContext = createContext<IPriceContext>({
  price: defaultPrice,
  setPrice: () => {},
});

export const usePriceContext = () => {
  return useContext(PriceContext);
};

interface PriceProviderProps {
  children: ReactNode;
}

export const PriceProvider: React.FC<PriceProviderProps> = ({ children }) => {
  const [price, setPrice] = useState<PriceType>(defaultPrice);

  return (
    <PriceContext.Provider value={{ price, setPrice }}>
      {children}
    </PriceContext.Provider>
  );
};
