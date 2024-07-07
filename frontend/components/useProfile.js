// useProfile.js
import { useEffect, useState } from 'react';
import { auth } from './../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export const useProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (user) {
      fetch('/api/isAdmin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email }),
      })
        .then((res) => res.json())
        .then((profileData) => {
          setData({
            email: user.email,
            name: user.displayName,
            uid: user.uid,
            admin: profileData.admin, // Ensure correct property name
          });
        })
        .catch((err) => console.error(err));
    }
  }, [user]);

  return { loading, data, error };
};
