'use client';
import React, { useState, useEffect } from 'react';
import FileUploader from './../../components/layout/FileUploader'; 
import EditableImage from '@/components/layout/EditableImage';// Assuming FileUploader is in the same directory

const ApplicationForm = () => {
  const [loans, setLoans] = useState([]);
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [country, setCountry] = useState('');
  const [loanType, setLoanType] = useState('');
  const [identityProofType, setIdentityProofType] = useState('');
  const [identityProofFile, setIdentityProofFile] = useState(null);

  useEffect(() => {
    fetchLoans();
  }, []);

  async function fetchLoans() {
    try {
      const response = await fetch('/api/loan');
      if (response.ok) {
        const loanData = await response.json();
        setLoans(loanData);
      } else {
        console.error('Error fetching loans:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching loans:', error);
    }
  }

  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      image,
      streetAddress,
      phoneNumber,
      email,
      city,
      pincode,
      country,
      loanType,
      identityProofType,
      identityProofFile,
    };

    try {
        const creationPromise = new Promise(async (resolve, reject) => {
          const res = await fetch('/api/application-form', {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });})}
          catch(e){
            console.log(e);
          }
    
    console.log('Form Data:', formData);
    // Handle further form submission logic here (e.g., sending data to the server)
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Loan Application Form</h1>
      <form onSubmit={handleFormSubmit} className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
        <EditableImage link={image} setLink={setImage} />
          <p className="text-sm text-gray-500">Please upload a clear photo of yourself.</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Street Address</label>
          <input
            type="text"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Pincode</label>
          <input
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Country</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Loan Type</label>
          <select
            value={loanType}
            onChange={(e) => setLoanType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Loan Type</option>
            {loans.map((loan) => (
              <option key={loan._id} value={loan.name}>
                {loan.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Identity Proof</label>
          <select
            value={identityProofType}
            onChange={(e) => setIdentityProofType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Identity Proof</option>
            <option value="aadhar">Aadhar Card</option>
            <option value="pan">PAN Card</option>
            <option value="ration">Ration Card</option>
            <option value="passport">Passport</option>
            <option value="voter">Voter ID Card</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload Identity Proof (PDF)</label>
          <FileUploader setLink={setIdentityProofFile} />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
