'use client';
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import FileUploader from './../../components/layout/FileUploader'; 
import EditableImage from '@/components/layout/EditableImage'; // Assuming EditableImage is in the same directory

const ApplicationForm = () => {
  const { data: session } = useSession();
  const [loans, setLoans] = useState([]);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
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
    async function fetchData() {
      try {
        // Fetch user profile data
        const response = await fetch('/api/profile');
        if (response.ok) {
          const data = await response.json();
          setName(data.name || '');
          setPhoneNumber(data.phoneNumber || '');
          setEmail(data.email || '');
          setStreetAddress(data.streetAddress || '');
          setCity(data.city || '');
          setPincode(data.pincode || '');
          setCountry(data.country || '');
          setImage(data.image || '');
          setLoanType(data.loanType || '');
          setIdentityProofType(data.identityProofType || '');
          setIdentityProofFile(data.identityProofFile || null);
        } else {
          console.error('Error fetching profile data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    }

    fetchData();
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

  const handleFormSubmit = async (e) => {
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
      const response = await fetch('/api/application-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        // Add further success handling logic here
      } else {
        console.error('Form submission error:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-8 flex">
        <form onSubmit={handleFormSubmit} className="w-full flex flex-col lg:flex-row lg:space-x-8">
          {/* Left Side: Personal Information */}
          <div className="w-full lg:w-1/3 space-y-6">
            <h1 className="text-3xl font-bold text-center mb-8">Loan Application Form</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <EditableImage link={image} setLink={setImage} />
              <p className="text-sm text-gray-500 mt-2">Please upload a clear photo of yourself.</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Your phone number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="input input-bordered"
              />
            </div>
          </div>
          {/* Right Side: Additional Information and PDF Upload */}
          <div className="w-full lg:w-2/3 flex flex-col space-y-6">
            {/* Top Column: Additional Details */}
            <div className="flex flex-col space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Street Address</span>
                </label>
                <input
                  type="text"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  placeholder="Your street address"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">City</span>
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Your city"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pincode</span>
                </label>
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Your pincode"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Country</span>
                </label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Your country"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Loan Type</span>
                </label>
                <select
                  value={loanType}
                  onChange={(e) => setLoanType(e.target.value)}
                  className="select select-bordered"
                >
                  <option value="">Select Loan Type</option>
                  {loans.map((loan) => (
                    <option key={loan._id} value={loan.name}>
                      {loan.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Identity Proof Type</span>
                </label>
                <select
                  value={identityProofType}
                  onChange={(e) => setIdentityProofType(e.target.value)}
                  className="select select-bordered"
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
            </div>
            {/* Bottom Column: PDF Upload */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Identity Proof Upload</span>
              </label>
              <FileUploader setFile={setIdentityProofFile} />
            </div>
            <button type="submit" className="btn btn-primary w-full">Submit Application</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
