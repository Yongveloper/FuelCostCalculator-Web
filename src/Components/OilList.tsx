import { memo } from 'react';
import { IOils } from '@/pages';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import OilLIstItem from './OilLIstItem';

interface IOilListProps {
  oils: IOils[];
}

function OilList({ oils }: IOilListProps) {
  console.log('render');
  return (
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="직접입력"
      name="radio-buttons-group"
    >
      {oils.map((oil) => (
        <OilLIstItem
          key={oil.name}
          name={oil.name}
          price={oil.price}
          disabled={!oils[0].price}
        />
      ))}
      <FormControlLabel value="직접입력" control={<Radio />} label="직접입력" />
    </RadioGroup>
  );
}

export default memo(OilList);
