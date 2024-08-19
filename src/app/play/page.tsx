'use client'

import { signOut } from 'next-auth/react';
import useSessionState from '@/hooks/useSessionState';

const Page = () => {
  const { session, status } = useSessionState();
  console.log('hello world')
  console.log(session)

  return (<>
      {session?.user?.name}

      <button onClick={() => signOut()}>Sign Out</button>
  </>)
};

export default Page;
