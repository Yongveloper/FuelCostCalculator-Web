import { memo, useEffect, useRef, useState } from 'react';
import { IOils } from '@/pages';
import {
  Box,
  FormControl,
  FormControlLabel,
  Input,
  InputAdornment,
  Radio,
  RadioGroup,
} from '@mui/material';
import OilLIstItem from './OilLIstItem';

interface IOilListProps {
  oils: IOils[];
}

function OilList({ oils }: IOilListProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [selectedRadio, setSelectedRadio] = useState('직접입력');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.value);
  };

  useEffect(() => {
    if (selectedRadio === '직접입력') {
      inputRef.current?.focus();
    }
  }, [selectedRadio]);

  return (
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="직접입력"
      name="radio-buttons-group"
      onChange={handleRadioChange}
    >
      {oils.map((oil) => (
        <OilLIstItem
          key={oil.name}
          name={oil.name}
          price={oil.price}
          disabled={!oils[0].price}
        />
      ))}
      <Box sx={{ display: 'flex' }}>
        <FormControlLabel
          value="직접입력"
          control={<Radio />}
          label="직접입력"
        />
        <FormControl
          variant="standard"
          sx={{ width: '110px', marginBottom: '12px' }}
        >
          <Input
            id="standard-adornment-distance"
            inputRef={inputRef}
            placeholder="입력"
            endAdornment={<InputAdornment position="end">원/L</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'distance',
              style: {
                textAlign: 'right',
              },
            }}
          />
        </FormControl>
      </Box>
    </RadioGroup>
  );
}

export default memo(OilList);
