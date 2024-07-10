'use client'
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import EditableImage from '../../components/layout/EditableImage';
import { useProfile } from '@/components/useProfile';
import AdminTabs from '@/components/layout/AdminTabs';

const CreateLoan = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');
  const [loading, setLoading] = useState(false);
  const [loans, setLoans] = useState([]);
  const [editLoanId, setEditLoanId] = useState(null);

  useEffect(() => {
    fetchLoans();
  }, []);

  async function fetchLoans() {
    try {
      const response = await fetch("/api/loan");
      if (response.ok) {
        const loanData = await response.json();
        setLoans(loanData);
      }
    } catch (error) {
      console.error("Error fetching loans:", error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const creationPromise = new Promise(async (resolve, reject) => {
        const res = await fetch('/api/loan', {
          method: editLoanId ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ _id: editLoanId, name, description, photo }),
        });

        if (res.ok) {
          resolve();
          setName('');
          setDescription('');
          setPhoto('');
          setEditLoanId(null);
          fetchLoans();
        } else {
          reject();
        }
      });

      await toast.promise(creationPromise, {
        loading: editLoanId ? 'Updating loan...' : 'Creating loan...',
        success: editLoanId ? 'Loan updated successfully!' : 'Loan created successfully!',
        error: editLoanId ? 'Error updating loan.' : 'Error creating loan.',
      });
    } catch (error) {
      console.error(editLoanId ? 'Error updating loan:' : 'Error creating loan:', error);
      toast.error(`Error ${editLoanId ? 'updating' : 'creating'} loan: ${error}`);
    }

    setLoading(false);
  };

  const handleEdit = (loan) => {
    setName(loan.name);
    setDescription(loan.description);
    setPhoto(loan.photo);
    setEditLoanId(loan._id);
  };

  const handleDelete = async (loanId) => {
    try {
      const response = await fetch('/api/loan', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: loanId }),
      });
      if (response.ok) {
        toast.success('Loan deleted successfully!');
        fetchLoans();
      } else {
        toast.error('Error deleting loan.');
      }
    } catch (error) {
      console.error('Error deleting loan:', error);
      toast.error(`Error deleting loan: ${error}`);
    }
  };

  const { data } = useProfile();

  if (loading) {
    return "Loading user info.....";
  }

  if (!data.admin) {
    return "Not an admin.";
  }

  return (<>
    <AdminTabs isAdmin={data.admin} />
    <div className="min-h-screen flex items-center justify-center bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-screen-md w-full space-y-8 bg-slate-300 p-8 rounded-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {editLoanId ? 'Edit Loan' : 'Create a New Loan'}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Loan Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <textarea
                id="description"
                name="description"
                placeholder="Loan Description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div className='p-4 m-4'>
              <EditableImage link={photo} setLink={setPhoto} />
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? (editLoanId ? 'Updating...' : 'Creating...') : (editLoanId ? 'Update Loan' : 'Create Loan')}
            </button>
          </div>
        </form>

        {loans.length > 0 && loans.map(loan => (
          <div
            key={loan._id}
            className='bg-slate-100 p-4 m-2 rounded-lg'
          >
            <div className="grow text-black">
              <h3 className="font-bold">{loan.name}</h3>
              <p>{loan.description}</p>
            </div>
            <div className='w-72 h-48'>
              <img src={loan.photo} alt={loan.name} className='w-full h-full object-cover' />
            </div>
            <div className="flex justify-end space-x-2 mt-2">
              <button
                onClick={() => handleEdit(loan)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(loan._id)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default CreateLoan;
