'use client'

import useAuthRedirect from '@/hooks/useAuthRedirect';
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';

interface AuthStatusComponentProps {
  children: React.ReactNode;
}

const AuthStatusComponent: React.FC<AuthStatusComponentProps> = ({ children }) => {
  const { status } = useAuthRedirect();
  const router = useRouter();

  const [showLoading, setShowLoading] = useState(false);


  // Delay display of status loading to prevent flashing
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (status === "loading") {
      timer = setTimeout(() => {
        setShowLoading(true);
      }, 500);
    } else {
      setShowLoading(false);
    }

    return () => clearTimeout(timer);
  }, [status]);


  const redirectToSignin = () => {
    router.push('/auth/signin')
  }


  // Loading
  if (showLoading) {
    return <p>Authenticating, please wait...</p>;
  }

  // Unauthenticated
  if (status === "unauthenticated") {
    return (<>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', margin:'auto' }}>
        <h1>Uh Oh.</h1>
        <h3>You are not signed in</h3>
        <p> You will be redirected in 5s</p>

        <button onClick={redirectToSignin}>Signin Now</button>
      </div>
    </>);
  }

  // Authenticated
  if (status === "authenticated") {
    return (<>{children}</>);
  }


  return (<></>);
};

export default AuthStatusComponent;
