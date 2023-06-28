import React from 'react';
import CachedIcon from '@mui/icons-material/Cached';
import { LoadingButton } from '@mui/lab';

interface IOilPriceFetchButtonProps {
  loading: boolean;
  onClick: () => void;
}

function OilPriceFetchButton({ loading, onClick }: IOilPriceFetchButtonProps) {
  return (
    <LoadingButton
      size="medium"
      onClick={onClick}
      loading={loading}
      loadingIndicator="불러오는중..."
      variant="outlined"
      sx={{ marginY: '4px' }}
    >
      <CachedIcon sx={{ marginRight: '4px' }} />
      <span>전국 주유소 평균 가격 조회하기</span>
    </LoadingButton>
  );
}

export default OilPriceFetchButton;
