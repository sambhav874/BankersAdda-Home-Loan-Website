'use client';

import { useEffect, useState } from 'react';
import { useProfile } from './../../../components/useProfile';
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
        console.log(userData)
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
    return <div>Loading...</div>;
  }

  if (!isAdmin) {
    return 'Not an admin';
  }

  return (
    <div className="mt-8 mx-auto max-w-3xl">
      <AdminTabs isAdmin={isAdmin} />
      <div className="mt-8">
        <UserForm user={user} isAdmin={isAdmin} onSave={handleSaveButtonClick} />
      </div>
    </div>
  );
}
