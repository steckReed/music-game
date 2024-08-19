'use client'

import { useSession } from 'next-auth/react';

const useSessionState = () => {
  const { data: session, status } = useSession();
  return { session, status };
};

export default useSessionState;
