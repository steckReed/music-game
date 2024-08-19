'use client'

import { signOut } from 'next-auth/react';
import useSessionState from '@/hooks/useSessionState';
import AuthStatusComponent from '@/components/auth/AuthStatusComponent';

const Page = () => {
  // const { session, status } = useSessionState();


  return (<>
    <div style={{ margin:'auto' }}>
      <h1 style={{ textAlign:'center' }}>Games home page and about</h1>
    </div>
  </>)
};

export default Page;
