'use client';
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import toast from 'react-hot-toast';
import EditableImage from '../../components/layout/EditableImage';
import AdminTabs from './../../components/layout/AdminTabs';

const Profile = () => {
  const { data: session, status } = useSession();
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");
  const [image, setImage] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [profileFetched, setProfileFetched] = useState(false);

  useEffect(() => {
    if (status === 'authenticated' && session) {
      setUserName(session.user.name || "");
      setImage(session.user.image || "");
      fetch('/api/profile')
        .then(response => response.json())
        .then(data => {
          setImage(data.image || "");
          setUserName(data.name || "");
          setPhoneNumber(data.phoneNumber || "");
          setCity(data.city || "");
          setPincode(data.pincode || "");
          setCountry(data.country || "");
          setIsAdmin(data.admin);
          setStreetAddress(data.streetAddress || "");
          setProfileFetched(true);
        })
        .catch(error => {
          console.error("Error fetching profile data:", error);
        });
    }
  }, [session, status]);

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();
    toast('Saving....');

    const savingPromise = new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('/api/profile', {
          method: 'PUT',
          headers: { 
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            name: userName, 
            image, 
            streetAddress, 
            phoneNumber, 
            city, 
            country, 
            pincode 
          }),
        });
        if (response.ok) {
          resolve();
        } else {
          reject();
        }
      } catch (error) {
        reject(error);
      }
    });

    await toast.promise(savingPromise, {
      loading: 'Saving...',
      success: 'Profile Saved!',
      error: 'Upload Error...',
    });
  }

  if (status === "loading" || !profileFetched) {
    return "Loading...";
  }
  if (status === "unauthenticated") {
    return redirect("/login");
  }

  return (<>
    <AdminTabs isAdmin={isAdmin} />
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="max-w-6xl md:max-w-full m-2 w-full mx-auto bg-gray-800 shadow-md rounded-lg p-8">
        
        <div className="flex flex-col m-12 items-center">
          <EditableImage link={image} setLink={setImage} />
          <form className="mt-4 w-full" onSubmit={handleProfileInfoUpdate}>
            <div className="mb-4">
              <label htmlFor="userName" className="block text-white text-lg font-bold mb-2 hover:text-gray-400">First and Last Name:</label>
              <input
                id="userName"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-black leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500"
                value={userName}
                onChange={(ev) => setUserName(ev.target.value)}
                placeholder="First and Last Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white text-lg font-bold mb-2 hover:text-gray-400">Email:</label>
              <input
                id="email"
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-black leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500"
                disabled={true}
                value={session?.user?.email}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-white text-lg font-bold mb-2 hover:text-gray-400">Phone Number:</label>
              <input
                id="phoneNumber"
                type="tel"
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-black leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500"
                onChange={(ev) => setPhoneNumber(ev.target.value)}
                value={phoneNumber}
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="streetAddress" className="block text-white text-lg font-bold mb-2 hover:text-gray-400">Street Address:</label>
              <input
                id="streetAddress"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-black leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500"
                onChange={(ev) => setStreetAddress(ev.target.value)}
                value={streetAddress}
                placeholder="Street Address"
              />
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label htmlFor="pincode" className="block text-white text-lg font-bold mb-2 hover:text-gray-400">Pincode:</label>
                <input
                  id="pincode"
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-black leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500"
                  onChange={(ev) => setPincode(ev.target.value)}
                  value={pincode}
                  placeholder="Pincode"
                />
              </div>
              <div className="w-1/2 ml-2">
                <label htmlFor="city" className="block text-white text-lg font-bold mb-2 hover:text-gray-400">City:</label>
                <input
                  id="city"
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-black leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500"
                  onChange={(ev) => setCity(ev.target.value)}
                  value={city}
                  placeholder="City"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="country" className="block text-white text-lg font-bold mb-2 hover:text-gray-400">Country:</label>
              <input
                id="country"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-black leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500"
                onChange={(ev) => setCountry(ev.target.value)}
                value={country}
                placeholder="Country"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
