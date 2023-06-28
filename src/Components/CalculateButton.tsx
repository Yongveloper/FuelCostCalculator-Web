import { Button } from '@mui/material';

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
  const handleCalculateButton = () => {
    //예상 주유비 = 주행거리 ÷ 연비 x 기름값
    if (price) {
      const expectedPrice = Math.ceil((distance / fuelEfficiency) * price);
      console.log(expectedPrice);
      const expectedFuelVolume = (expectedPrice / price).toFixed(3);
      console.log(expectedFuelVolume);
    }
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
