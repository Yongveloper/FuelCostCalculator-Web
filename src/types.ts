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
