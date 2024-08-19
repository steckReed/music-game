import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useSessionState from './useSessionState';

const useAuthRedirect = () => {
  const { session, status } = useSessionState();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      // 5s delay before redirect
      const timer = setTimeout(() => {
        router.push('/auth/signin')
      }, 5000); 

      return () => clearTimeout(timer);
    }
  }, [status, router]);

  return { session, status };
};

export default useAuthRedirect;
