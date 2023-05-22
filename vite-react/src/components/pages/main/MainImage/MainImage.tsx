import { Box } from '@mui/material';

import { Image } from './MainImage.styles';

function MainImage() {
  return (
    <Box component="section" display="flex">
      <Image src={new URL('/main-image.png', import.meta.url).href} alt="Main Image" />
    </Box>
  );
}

export default MainImage;
