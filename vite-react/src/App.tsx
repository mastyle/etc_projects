import { ThemeProvider, useTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthRoute from '@components/utils/AuthRoute';

import DashBoard from '@pages/dashboard';
import Error404 from '@pages/errors/404';
import Main from '@pages/index';
import Login from '@pages/login';
import SessionProvider from '@provider/SessionProvider';

import './App.css';

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SessionProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/dashboard" element={<AuthRoute element={<DashBoard />} />} />
            <Route path="/login" element={<Login />} />
            <Route path={'/*'} element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </SessionProvider>
    </ThemeProvider>
  );
}
export default App;
