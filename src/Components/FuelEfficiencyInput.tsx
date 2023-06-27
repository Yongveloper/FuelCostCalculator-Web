import { FormControl, Input, InputAdornment } from '@mui/material';

interface IFuelEfficiencyInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function FuelEfficiencyInput({ value, onChange }: IFuelEfficiencyInputProps) {
  return (
    <FormControl
      variant="standard"
      sx={{ width: '90px', marginBottom: '12px' }}
    >
      <Input
        id="standard-adornment-fuel-efficiency"
        placeholder="입력"
        endAdornment={<InputAdornment position="end">km/L</InputAdornment>}
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          'aria-label': 'fuel-efficiency',
          style: {
            textAlign: 'right',
          },
        }}
        onChange={onChange}
        value={value}
      />
    </FormControl>
  );
}

export default FuelEfficiencyInput;
