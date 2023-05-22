import { Dispatch, SetStateAction, createContext } from 'react';

const SessionContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([
  false,
  () => false
]);
export default SessionContext;
