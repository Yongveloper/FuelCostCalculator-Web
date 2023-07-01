import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';

export type PriceType = number;

const defaultPrice: PriceType = 0;

interface IPriceContext {
  price: PriceType;
  setPrice: (value: string) => void;
}

const PriceContext = createContext<IPriceContext>({
  price: defaultPrice,
  setPrice: (value: string) => {},
});

export const usePriceContext = () => {
  return useContext(PriceContext);
};

interface PriceProviderProps {
  children: ReactNode;
}

export const PriceProvider: React.FC<PriceProviderProps> = ({ children }) => {
  const [price, setPrice] = useState<PriceType>(defaultPrice);

  const updatePrice = (value: string) => {
    if (value !== '') {
      const numberWithCommasRemoved = value.replace(/,/g, '');
      const number = parseFloat(numberWithCommasRemoved);
      setPrice(number);
    }
  };

  return (
    <PriceContext.Provider value={{ price, setPrice: updatePrice }}>
      {children}
    </PriceContext.Provider>
  );
};
