'use client';
import { auth } from './../../firebase/firebase';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const CheckAdminStatus = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user && user.email) {
      const fetchAdminStatus = async () => {
        try {
          const response = await fetch('/api/isAdmin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: user.email }) // Send email in body
          });

          if (!response.ok) {
            throw new Error('Failed to fetch admin status');
          }

          const data = await response.json();
          setIsAdmin(data.isAdmin);
        } catch (error) {
          console.error('Error checking admin status:', error);
        }
      };

      fetchAdminStatus();
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {user?.email && (isAdmin ? 'User is an admin' : 'User is not an admin')}
    </div>
  );
};

export default CheckAdminStatus;
