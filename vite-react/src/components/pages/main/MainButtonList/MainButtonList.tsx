import {
  ContentCopyOutlined,
  CopyrightOutlined,
  DescriptionOutlined,
  HomeOutlined
} from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

function MainButtonList() {
  const handleClick = () => window.open(window.location.href);

  return (
    <Box display="flex" gap={8} m="32px auto 0" maxWidth={765}>
      <IconButton size="large" color="primary" onClick={handleClick}>
        <HomeOutlined
          sx={{
            width: '5em',
            height: '5em'
          }}
        />
      </IconButton>
      <IconButton size="large" color="primary" onClick={handleClick}>
        <DescriptionOutlined
          sx={{
            width: '5em',
            height: '5em'
          }}
        />
      </IconButton>
      <IconButton size="large" color="primary" onClick={handleClick}>
        <ContentCopyOutlined
          sx={{
            width: '5em',
            height: '5em'
          }}
        />
      </IconButton>
      <IconButton size="large" color="primary" onClick={handleClick}>
        <CopyrightOutlined
          sx={{
            width: '5em',
            height: '5em'
          }}
        />
      </IconButton>
    </Box>
  );
}

export default MainButtonList;
