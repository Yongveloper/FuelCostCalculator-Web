import { Typography, Box } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{ width: '100%', mt: 2, textAlign: 'center', color: 'gray' }}
      component="footer"
    >
      <Typography variant="body2" component="span">
        Contact: yongyong5766@gmail.com
        <br />© yongyong Co. all rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
