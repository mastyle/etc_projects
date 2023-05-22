import { useContext } from 'react';

import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import sessionContext from '@context/SessionContext';

function LoginForm() {
  const navigate = useNavigate();

  const [hasSession, setHasSession] = useContext(sessionContext);

  const handleClick = () => {
    setHasSession((prevState) => !prevState);
    navigate('/');
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        minWidth: 320,
        p: 2,
        border: 'none'
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          mb: 3
        }}
      >
        로고 영역
      </Typography>
      {!hasSession ? (
        <>
          <Box display="flex" flexDirection="column" gap={1}>
            <TextField label="아이디" />
            <TextField label="비밀번호" />
          </Box>
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={handleClick}
            sx={{
              mt: 1
            }}
          >
            로그인
          </Button>
        </>
      ) : (
        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={handleClick}
          sx={{
            mt: 1
          }}
        >
          로그아웃
        </Button>
      )}
    </Paper>
  );
}

export default LoginForm;
