import { Typography, Box } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{ width: '100%', mt: 2, textAlign: 'center', color: 'gray' }}
      component="footer"
    >
      <Box sx={{ maxWidth: '320px', margin: 'auto' }}>
        <ins
          className="kakao_ad_area"
          style={{ display: 'none' }}
          data-ad-unit="DAN-tzLsnHJx4Gf6MSfP"
          data-ad-width="320"
          data-ad-height="100"
        ></ins>
        <script
          type="text/javascript"
          src="//t1.daumcdn.net/kas/static/ba.min.js"
          async
        ></script>
      </Box>
      <Typography variant="body2" component="span">
        Contact: yongyong5766@gmail.com
        <br />© yongyong Co. all rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
