import { OilData } from './types';

export const isValidNumberWithDot = (input: string) => {
  const regex = /^[0-9]*\.?[0-9]*$/;
  return regex.test(input);
};

export const isValidPositiveNumber = (input: string) => {
  const regex = /^[0-9]+$/;
  return regex.test(input);
};

const getRenamedFuel = (oilName: string) => {
  let name = '';
  switch (oilName) {
    case '고급휘발유':
      name = '고급 휘발유';
      break;
    case '자동차용경유':
      name = '경유';
      break;
    case '휘발유':
      name = '휘발유';
      break;
    case '자동차용부탄':
      name = 'LPG';
      break;
  }
  return name;
};

export const fetchOilPrice = async (url: string) => {
  const data = await fetch(url);
  const json: OilData = await data.json();
  const result = json.RESULT.OIL.filter((oil) => oil.PRODNM !== '실내등유').map(
    (oil) => {
      return {
        name: getRenamedFuel(oil.PRODNM),
        price: Math.round(parseInt(oil.PRICE)).toLocaleString('ko-KR') || '',
      };
    }
  );
  return result;
};
