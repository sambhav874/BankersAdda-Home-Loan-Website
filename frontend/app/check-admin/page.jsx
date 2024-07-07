'use client'
import React, { useEffect } from 'react';
import { useProfile } from './../../components/useProfile';

const CheckAdminStatus = () => {
  const { loading, data, error } = useProfile();

  useEffect(() => {
    if (error) {
      console.error('Error fetching profile data:', error);
    }
  }, [error]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error: Unable to fetch profile data</div>;
  }

  return (
    <div>
      {data.isAdmin ? 'User is an admin' : 'User is not an admin'}
    </div>
  );
};

export default CheckAdminStatus;
