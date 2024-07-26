import React, { useState } from "react";
import EditableImage from "./EditableImage";
import AddressInputs from "./AddressInputs";

export default function UserForm({ user, isAdmin, onSave }) {
  const [userName, setUserName] = useState(user?.name || "");
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || "");
  const [streetAddress, setStreetAddress] = useState(user?.streetAddress || "");
  const [admin, setAdmin] = useState(user?.admin || false); // Initialize admin state with user's admin status
  const [city, setCity] = useState(user?.city || "");
  const [pincode, setPincode] = useState(user?.pincode || "");
  const [country, setCountry] = useState(user?.country || "");
  const [image, setImage] = useState(user?.image || "");

  function handleAddressChange(propName, value) {
    if (propName === "city") setCity(value);
    if (propName === "phoneNumber") setPhoneNumber(value);
    if (propName === "pincode") setPincode(value);
    if (propName === "country") setCountry(value);
    if (propName === "streetAddress") setStreetAddress(value);
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
      <div className="lg:w-1/4">
        <div className="p-4 bg-gray-900 rounded-lg shadow-lg">
          <EditableImage link={user?.image} setLink={setImage} />
        </div>
      </div>
      <div className="lg:w-3/4">
        <form
          className="bg-gray-800 shadow-md rounded-lg px-6 py-4 lg:p-8 w-full"
          onSubmit={(ev) =>
            onSave(ev, {
              name: userName,
              phoneNumber,
              streetAddress,
              city,
              admin,
              image,
              pincode,
              country,
            })
          }
        >
          <div className="mb-6">
            <label htmlFor="userName" className="block text-lg font-bold text-gray-100 mb-2">
              First and Last Name
            </label>
            <input
              id="userName"
              type="text"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-base"
              value={userName}
              onChange={(ev) => setUserName(ev.target.value)}
              placeholder="First and Last Name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="userEmail" className="block text-lg font-bold text-gray-100 mb-2">
              Email
            </label>
            <input
              id="userEmail"
              type="email"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed"
              disabled={true}
              value={user?.email}
            />
          </div>
          <AddressInputs
            addressProps={{ phoneNumber, pincode, streetAddress, city, country }}
            setAddressProps={handleAddressChange}
          />
          {isAdmin && ( // Render admin-specific fields only if isAdmin is true
            <div className="mb-6 flex items-center">
              <input
                id="adminCB"
                type="checkbox"
                checked={admin}
                onChange={(ev) => setAdmin(ev.target.checked)}
                className="mr-2 h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
              />
              <label htmlFor="adminCB" className="text-lg font-medium text-gray-100">
                Admin
              </label>
            </div>
          )}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-md text-base font-bold text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
