import { ReactElement, useContext, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import sessionContext from '@context/SessionContext';

interface AuthRouteProps {
  element: ReactElement;
}

function AuthRoute({ element }: AuthRouteProps) {
  const navigate = useNavigate();

  const [hasSession] = useContext(sessionContext);

  useEffect(() => {
    if (!hasSession) navigate('/login');
  }, [hasSession, navigate]);

  if (!hasSession) return null;

  return element;
}

export default AuthRoute;
