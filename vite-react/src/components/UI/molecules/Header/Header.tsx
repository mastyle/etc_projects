import { useContext } from 'react';

import { Login, Logout } from '@mui/icons-material';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import sessionContext from '@context/SessionContext';

function Header() {
  const navigate = useNavigate();

  const [hasSession, setHasSession] = useContext(sessionContext);

  const handleClick = () => {
    if (!hasSession) {
      navigate('/login');
    } else {
      setHasSession(false);
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: 'white',
        boxShadow: 'none',
        borderBottom: ({ palette: { divider } }) => `1px solid ${divider}`
      }}
    >
      <Toolbar>
        {!hasSession ? (
          <Box display="flex" flexGrow={1} justifyContent="flex-end">
            <Button startIcon={<Login />} onClick={handleClick}>
              로그인
            </Button>
          </Box>
        ) : (
          <Box display="flex" flexGrow={1} justifyContent="flex-end">
            <Button startIcon={<Logout />} onClick={handleClick}>
              로그아웃
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
