import React from 'react';
import { FormControl, Input, InputAdornment } from '@mui/material';

interface IDistanceInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function DistanceInput({ value, onChange }: IDistanceInputProps) {
  console.log('render');

  return (
    <FormControl
      variant="standard"
      sx={{ width: '90px', marginBottom: '12px' }}
    >
      <Input
        id="standard-adornment-distance"
        placeholder="입력"
        endAdornment={<InputAdornment position="end">km</InputAdornment>}
        aria-describedby="standard-weight-helper-text"
        inputProps={{
          'aria-label': 'distance',
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

export default DistanceInput;
