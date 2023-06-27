import { memo, useEffect, useRef, useState, ChangeEvent } from 'react';
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
import { usePriceContext } from '@/context/PriceProvider';
import { isValidPositiveNumber } from '@/utils';
import { IOils } from '@/types';

interface IOilListProps {
  oils: IOils[];
}

function OilList({ oils }: IOilListProps) {
  const { setPrice } = usePriceContext();
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [selectedRadio, setSelectedRadio] = useState('직접입력');

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setSelectedRadio(value);
    if (value === '직접입력') {
      inputRef.current?.focus();
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    if (isValidPositiveNumber(value)) {
      setInputValue(value);
      setPrice(value);
    }
  };

  return (
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="직접입력"
      name="radio-buttons-group"
      value={selectedRadio}
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
            onChange={handleInputChange}
            onFocus={() => setSelectedRadio('직접입력')}
            value={inputValue}
          />
        </FormControl>
      </Box>
    </RadioGroup>
  );
}

export default memo(OilList);
