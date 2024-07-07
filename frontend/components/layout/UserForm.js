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
    <div className="flex flex-col text-black lg:flex-row gap-4 items-start">
      <div className="lg:w-1/4">
        <div className="p-2 rounded-lg text-white">
          <EditableImage link={user?.image} setLink={setImage} />
        </div>
      </div>
      <div className="lg:w-3/4">
        <form
          className="bg-white shadow-md rounded-lg px-6 py-4 lg:p-8 w-full"
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
          <div className="mb-4">
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
              First and Last Name
            </label>
            <input
              id="userName"
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={userName}
              onChange={(ev) => setUserName(ev.target.value)}
              placeholder="First and Last Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="userEmail"
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed"
              disabled={true}
              value={user?.email}
            />
          </div>
          <AddressInputs
            addressProps={{ phoneNumber, pincode, streetAddress, city, country }}
            setAddressProps={handleAddressChange}
          />
          {isAdmin && ( // Render admin-specific fields only if isAdmin is true
            <div className="mb-4">
              <label htmlFor="adminCB" className="flex items-center">
                <input
                  id="adminCB"
                  type="checkbox"
                  checked={admin}
                  onChange={(ev) => setAdmin(ev.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm font-medium text-gray-700">Admin</span>
              </label>
            </div>
          )}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
