'use client';

import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import { AppProvider } from '../components/AppContext';

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <AppProvider>
        <Toaster position="top-right" reverseOrder={false} />
        {children}
      </AppProvider>
    </SessionProvider>
  );
};

export default ClientProvider;
