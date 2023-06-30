import { ParsedUrlQuery } from 'querystring';

interface OilInfo {
  TRADE_DT: string;
  PRODCD: string;
  PRODNM: string;
  PRICE: string;
  DIFF: string;
}

export interface OilData {
  RESULT: {
    OIL: OilInfo[];
  };
}
export interface IOils {
  name: string;
  price: string | null;
}

export interface ResultPageQuery extends ParsedUrlQuery {
  distance: string | undefined;
  fuelEfficiency: string | undefined;
  price: string | undefined;
  expectedFuelVolume: string | undefined;
  expectedPrice: string | undefined;
}
