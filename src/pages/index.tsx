import { Roboto } from 'next/font/google';
import { useState, useCallback } from 'react';
import { Button, Container, Typography } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import OilList from '@/Components/OilList';
import { usePriceContext } from '@/context/PriceProvider';
import DistanceInput from '@/Components/DistanceInput';
import FuelEfficiencyInput from '@/Components/FuelEfficiencyInput';
import OilPriceFetchButton from '@/Components/OilPriceFetchButton';
import { fetchOilPrice, isValidNumberWithDot } from '@/utils';
import ErrorMsg from '@/Components/ErrorMsg';
import { IOils } from '@/types';

export default function Home() {
  const { price } = usePriceContext();
  const [distance, setDistance] = useState('');
  const [fuelEfficiency, setFuelEfficiency] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [oils, setOils] = useState<IOils[]>([
    {
      name: '고급 휘발유',
      price: null,
    },
    {
      name: '경유',
      price: null,
    },
    {
      name: '휘발유',
      price: null,
    },
    {
      name: 'LPG',
      price: null,
    },
  ]);

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
    setLoading(true);
    try {
      const data = await fetchOilPrice();
      setOils(data);
    } catch (error) {
      console.error(error);
      setError(true);
      return error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 'sm',
        margin: 'auto',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        <DirectionsCarIcon />
        운행 거리
      </Typography>
      <DistanceInput value={distance} onChange={handleDistanceInput} />
      <Typography variant="h5" component="h2" gutterBottom>
        <LocalGasStationIcon />
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
      {oils[0].price === null ? (
        <OilPriceFetchButton
          loading={loading}
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
      <Button
        variant="contained"
        size="large"
        sx={{ width: '100%', maxWidth: '320px' }}
      >
        계산하기
      </Button>
    </Container>
  );
}
