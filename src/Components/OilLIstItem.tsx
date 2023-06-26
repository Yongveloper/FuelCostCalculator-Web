import { usePriceContext } from '@/context/PriceProvider';
import { FormControlLabel, Radio } from '@mui/material';

interface IOilListItemProps {
  name: string;
  price: string | null;
  disabled: boolean;
}

function OilLIstItem({ name, price, disabled }: IOilListItemProps) {
  const { setPrice } = usePriceContext();
  return (
    <FormControlLabel
      value={name}
      disabled={disabled}
      control={<Radio />}
      label={`${name} (약 ${disabled ? '---' : price}원/L)`}
      onClick={() => setPrice(price)}
    />
  );
}

export default OilLIstItem;
