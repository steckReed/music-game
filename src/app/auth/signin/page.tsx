'use client'

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useEffect } from 'react';
import useSessionState from '@/hooks/useSessionState';

const Page = () => {
  const { status } = useSessionState();
  const router = useRouter();


  const redirectToHome = () => {
    router.push('/play')
  }

  useEffect(() => {
    if (status === "authenticated") {
      const timer = setTimeout(() => { redirectToHome() }, 3000);
      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, router]);

  return (<>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto' }}>
      {status === "authenticated" 
        ? (<>
          <h1>Cool Beans!</h1>
          <h3>You are signed in</h3>
          <p>You will be redirected in 3s</p>
          <button onClick={() => signIn('spotify')}>Redirect Now</button>
        </>)

        :(<>
          <h1>Login</h1>
          <button onClick={() => signIn('spotify')}>Sign in with Spotify</button>
        </>)
      }
    </div>
  </>);
};

export default Page;
