'use client'
import React, { useState  , useEffect} from 'react';
import toast from 'react-hot-toast';

const CreateLoan = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');
  const [loading, setLoading] = useState(false);
  const [loans , setLoans] = useState([]);

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
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, description, photo }),
        });
        setName('');
          setDescription('');
          setPhoto('');

        if (res.ok) {
          resolve();
          
        } else {
          reject();
        }
      });

      await toast.promise(creationPromise, {
        loading: 'Creating loan...',
        success: 'Loan created successfully!',
        error:  `Error creating loan.`,
      });
    } catch (error) {
      console.error('Error creating loan:', error);
      toast.error(`Error creating loan: ${error}`);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create a New Loan
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Loan Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <input
                id="photo"
                name="photo"
                type="text"
                placeholder="Photo URL"
                required
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? 'Creating...' : 'Create Loan'}
            </button>
          </div>
        </form>

        {loans?.length>0 && loans.map(c => (
            <div className='bg-slate-400' key={c._id}>
                <div  className="grow text-black">
            {c.name}
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default CreateLoan;
