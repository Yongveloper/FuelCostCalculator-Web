import { usePriceContext } from '@/context/PriceProvider';
import { Box, Divider, FormControlLabel, Radio } from '@mui/material';

interface IOilListItemProps {
  name: string;
  price: string | null;
  disabled: boolean;
}

function OilLIstItem({ name, price, disabled }: IOilListItemProps) {
  const { setPrice } = usePriceContext();
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <FormControlLabel
          value={name}
          disabled={disabled}
          control={<Radio />}
          label={name}
          onClick={() => setPrice(price)}
        />
        <span style={{ color: disabled ? 'rgba(0, 0, 0, 0.38)' : 'initial' }}>
          (약{' '}
          <span style={{ fontWeight: 'bold' }}>{disabled ? '---' : price}</span>
          원/L)
        </span>
      </Box>
      <Divider />
    </>
  );
}

export default OilLIstItem;
