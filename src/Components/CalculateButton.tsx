import { Button } from '@mui/material';
import { useRouter } from 'next/router';

interface ICalculateButtonProp {
  distance: number;
  fuelEfficiency: number;
  price: number | null;
  disabled: boolean;
}

function CalculateButton({
  distance,
  fuelEfficiency,
  price,
  disabled,
}: ICalculateButtonProp) {
  const router = useRouter();
  const handleCalculateButton = () => {
    if (!price) return;
    //예상 주유비 = 주행거리 ÷ 연비 x 기름값
    const expectedPrice = Math.ceil((distance / fuelEfficiency) * price);
    const expectedFuelVolume = (expectedPrice / price).toFixed(3);
    router.push({
      pathname: '/result',
      query: {
        distance,
        fuelEfficiency,
        price,
        expectedFuelVolume,
        expectedPrice,
      },
    });
  };

  return (
    <Button
      variant="contained"
      size="large"
      disabled={disabled}
      sx={{ width: '100%', maxWidth: '320px', marginTop: '12px' }}
      onClick={handleCalculateButton}
    >
      계산하기
    </Button>
  );
}

export default CalculateButton;
