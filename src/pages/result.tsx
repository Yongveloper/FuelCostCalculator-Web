import { Box, Button, Divider, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { ResultPageQuery } from '@/types';
import { NextSeo } from 'next-seo';

function Result() {
  const router = useRouter();
  const { distance, fuelEfficiency, price, expectedFuelVolume, expectedPrice } =
    router.query as ResultPageQuery;

  const handleButtonClick = () => router.push('/');

  const numberWithCommas = (number: string | undefined) => {
    if (!number) return null;
    return Number(number).toLocaleString();
  };

  return (
    <>
      <NextSeo
        title="기름값 계산기 - 쉽고 빠른 주유비 계산 | 결과 페이지"
        description="기름값, 주유비, 유류비 계산기의 결과 페이지입니다. 쉽고 빠르게 쥬유비를 계산하세요."
        canonical="https://fuelcostcalculator.vercel.app/result"
      />
      <Box sx={{ minWidth: '320px' }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '4px',
          }}
        >
          <Typography variant="h6" component="span">
            운행거리:
          </Typography>
          <Typography variant="h6" component="span">
            {numberWithCommas(distance) || 'null'}(km)
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '4px',
          }}
        >
          <Typography variant="h6" component="span">
            평균 연비:
          </Typography>
          <Typography variant="h6" component="span">
            {numberWithCommas(fuelEfficiency) || 'null'}(km/L)
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h6" component="span">
            유류 가격:
          </Typography>
          <Typography variant="h6" component="span">
            {numberWithCommas(price) || 'null'}(원/L)
          </Typography>
        </Box>

        <Box sx={{ width: '100%' }}>
          <Divider sx={{ marginY: '12px' }} />
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '8px',
            }}
          >
            <Typography variant="h5" component="span">
              예상 주유량:
            </Typography>
            <Typography variant="h5" component="span">
              <Typography
                variant="h5"
                component="span"
                sx={{ fontWeight: 'bold' }}
              >
                {expectedFuelVolume || 'null'}
              </Typography>
              (L)
            </Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h5" component="span">
              예상 주유비:
            </Typography>
            <Typography variant="h5" component="span">
              약{' '}
              <Typography
                variant="h5"
                component="span"
                sx={{ fontWeight: 'bold' }}
              >
                {numberWithCommas(expectedPrice) || 'null'}
              </Typography>
              (원)
            </Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          size="large"
          sx={{ width: '100%', maxWidth: '320px', marginTop: '26px' }}
          onClick={handleButtonClick}
        >
          다시 계산하기
        </Button>
      </Box>
    </>
  );
}

export default Result;
