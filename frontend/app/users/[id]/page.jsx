'use client';

import { useEffect, useState } from 'react';
import { useProfile } from '../../../components/useProfile';
import UserForm from '../../../components/layout/UserForm';
import AdminTabs from '../../../components/layout/AdminTabs';
import { useParams } from 'next/navigation';
import toast from 'react-hot-toast';

export default function EditUserPage() {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const { loading, data: loggedInUser } = useProfile();

  useEffect(() => {
    fetch('/api/profile?_id=' + id).then((res) => {
      res.json().then((userData) => {
        setUser(userData);
      });
    });
  }, [id]);

  const isAdmin = loggedInUser?.admin;

  async function handleSaveButtonClick(ev, formData) {
    ev.preventDefault();
    const promise = new Promise(async (resolve, reject) => {
      const res = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, _id: id }),
      });
      if (res.ok) resolve();
      else reject();
    });

    await toast.promise(promise, {
      loading: 'Saving user...',
      success: 'User saved',
      error: 'An error has occurred while saving the user',
    });
  }

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (!isAdmin) {
    return <div className="text-center text-red-500">Not an admin</div>;
  }

  return (<>
    <AdminTabs isAdmin={isAdmin} />
    <div className="mt-8 mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      
      <div className="mt-8 bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-white mb-4">Edit User</h2>
        <UserForm user={user} isAdmin={isAdmin} onSave={handleSaveButtonClick} />
      </div>
    </div>
    </>
  );
}
