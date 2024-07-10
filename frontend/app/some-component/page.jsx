'use client'
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const SomeComponent = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log('Session data:', session);
    console.log('Session status:', status);
  }, [session, status]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p>Please log in</p>;
  }

  return (
    <div className='text-white bg-white'>
      <p>Welcome, {session.user.email}</p>
    </div>
  );
};

export default SomeComponent;
