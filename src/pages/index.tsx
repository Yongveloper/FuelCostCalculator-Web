import { useState } from 'react';
import { Container, Typography } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import OilList from '@/Components/OilList';
import DistanceInput from '@/Components/DistanceInput';
import FuelEfficiencyInput from '@/Components/FuelEfficiencyInput';
import OilPriceFetchButton from '@/Components/OilPriceFetchButton';
import { fetchOilPrice, isValidNumberWithDot } from '@/utils';
import ErrorMsg from '@/Components/ErrorMsg';
import { usePriceContext } from '@/context/PriceProvider';
import CalculateButton from '@/Components/CalculateButton';
import useSWR, { mutate } from 'swr';
import Head from 'next/head';

const initialData = [
  {
    name: '고급 휘발유',
    price: '',
  },
  {
    name: '경유',
    price: '',
  },
  {
    name: '휘발유',
    price: '',
  },
  {
    name: 'LPG',
    price: '',
  },
];

export default function Home() {
  const { price } = usePriceContext();
  const [distance, setDistance] = useState('');
  const [fuelEfficiency, setFuelEfficiency] = useState('');
  const {
    data: oils,
    error,
    isLoading,
  } = useSWR(process.env.NEXT_PUBLIC_API_KEY as string, fetchOilPrice, {
    fallbackData: initialData,
    revalidateOnFocus: false,
    revalidateOnMount: false,
  });

  const handleDistanceInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;

    if (isValidNumberWithDot(value)) {
      setDistance(value);
    }
  };

  const handleFuelEfficiencyInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      currentTarget: { value },
    } = event;

    if (isValidNumberWithDot(value)) {
      setFuelEfficiency(value);
    }
  };

  const handleFetchOilPriceBtn = async () => {
    const newData = await fetchOilPrice(
      process.env.NEXT_PUBLIC_API_KEY as string
    );
    mutate(process.env.NEXT_PUBLIC_API_KEY as string, newData, false);
  };

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="CYaoNc6HqLsOSdLZsPQPSOUW2UTLv8D94DLu6H485HI"
        />
        <meta
          name="naver-site-verification"
          content="1118bc80a8f949d01e4a1d3e82c94f93dc6ada54"
        />
      </Head>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <DirectionsCarIcon sx={{ marginRight: '4px' }} />
        운행 거리
      </Typography>
      <DistanceInput value={distance} onChange={handleDistanceInput} />
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <LocalGasStationIcon sx={{ marginRight: '4px' }} />
        평균 연비
      </Typography>
      <FuelEfficiencyInput
        value={fuelEfficiency}
        onChange={handleFuelEfficiencyInput}
      />
      <Typography variant="h5" component="h2" gutterBottom>
        ₩ 유류 가격
      </Typography>
      {error && <ErrorMsg />}
      {oils[0].price === '' ? (
        <OilPriceFetchButton
          isLoading={isLoading}
          onClick={handleFetchOilPriceBtn}
        />
      ) : (
        <Typography variant="subtitle1" component="h4" gutterBottom>
          {new Intl.DateTimeFormat('ko-KR', { dateStyle: 'full' }).format(
            new Date()
          )}{' '}
          전국 평균 가격
        </Typography>
      )}
      <OilList oils={oils} />
      <CalculateButton
        distance={Number(distance)}
        fuelEfficiency={Number(fuelEfficiency)}
        price={price}
        disabled={distance && fuelEfficiency && price ? false : true}
      />
    </>
  );
}
