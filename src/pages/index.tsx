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
import { isValidNumberWithDot } from '@/utils';

interface OilInfo {
  TRADE_DT: string;
  PRODCD: string;
  PRODNM: string;
  PRICE: string;
  DIFF: string;
}

interface OilData {
  RESULT: {
    OIL: OilInfo[];
  };
}
export interface IOils {
  name: string;
  price: string | null;
}

export default function Home() {
  const { price } = usePriceContext();
  console.log(price);

  const [distance, setDistance] = useState('');
  const [fuelEfficiency, setFuelEfficiency] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
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

  const handleDistanceInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const {
        currentTarget: { value },
      } = event;

      if (isValidNumberWithDot(value)) {
        setDistance(value);
      }
    },
    []
  );

  const handleFuelEfficiencyInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const {
        currentTarget: { value },
      } = event;

      if (isValidNumberWithDot(value)) {
        setFuelEfficiency(value);
      }
    },
    []
  );

  const fetchOilPrice = async () => {
    setLoading(true);
    try {
      const data = await fetch(process.env.NEXT_PUBLIC_API_KEY as string);
      const json: OilData = await data.json();
      const result = json.RESULT.OIL.filter(
        (oil) => oil.PRODNM !== '실내등유'
      ).map((oil) => {
        return {
          name: setRename(oil.PRODNM),
          price: Math.round(parseInt(oil.PRICE)).toLocaleString('ko-KR'),
        };
      });
      setOils(result);
    } catch (error) {
      console.error(error);
      return error;
    } finally {
      setLoading(false);
    }
  };

  function setRename(oilName: string) {
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
  }

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
      {oils[0].price === null ? (
        <OilPriceFetchButton loading={loading} onClick={fetchOilPrice} />
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
