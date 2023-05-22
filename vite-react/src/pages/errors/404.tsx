import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
import { Paper, Typography } from '@mui/material';

import FlexibleLayout from '@components/layouts/FlexibleLayout';

function Error404() {
  return (
    <FlexibleLayout centered>
      <Paper
        variant="outlined"
        sx={{
          minWidth: 320,
          p: 2,
          textAlign: 'center',
          border: 'none'
        }}
      >
        <WarningOutlinedIcon
          color="warning"
          sx={{
            width: '5em',
            height: '5em'
          }}
        />
        <Typography
          variant="h5"
          sx={{
            mt: 2
          }}
        >
          존재하지 않는 페이지예요!
        </Typography>
      </Paper>
    </FlexibleLayout>
  );
}

export default Error404;
