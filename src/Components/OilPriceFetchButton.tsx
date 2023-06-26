import React from 'react';
import { Box, Button } from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';

interface IOilPriceFetchButtonProps {
  onClick: () => void;
}

function OilPriceFetchButton({ onClick }: IOilPriceFetchButtonProps) {
  return (
    <Box
      sx={{
        marginBottom: '0.35em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        variant="contained"
        size="small"
        startIcon={<CachedIcon />}
        onClick={onClick}
      >
        전국 주유소 평균 가격 조회하기
      </Button>
    </Box>
  );
}

export default OilPriceFetchButton;
