import { Typography } from '@mui/material';

function ErrorMsg() {
  return (
    <Typography
      variant="body1"
      component="h5"
      gutterBottom
      sx={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}
    >
      데이터를 불러올 수 없습니다.
      <br />
      잠시 후 시도 해주세요.
    </Typography>
  );
}

export default ErrorMsg;
