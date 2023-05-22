import { PropsWithChildren, useState } from 'react';

import SessionContext from '@context/SessionContext';

function SessionProvider({ children }: PropsWithChildren) {
  const value = useState(false);

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
}

export default SessionProvider;
