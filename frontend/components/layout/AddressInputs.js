import React from "react";

const AddressInputs = ({ addressProps, setAddressProps, disabled = false }) => {
  const { phoneNumber, streetAddress, pincode, city, country } = addressProps;

  const handleChange = (propName, value) => {
    setAddressProps(propName, value);
  };

  return (
    <div className="mb-4">
      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
        Phone Number
      </label>
      <input
        id="phoneNumber"
        type="tel"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        value={phoneNumber}
        onChange={(ev) => handleChange("phoneNumber", ev.target.value)}
        placeholder="Phone Number"
        disabled={disabled}
      />
      <label htmlFor="streetAddress" className="block mt-4 text-sm font-medium text-gray-700">
        Street Address
      </label>
      <input
        id="streetAddress"
        type="text"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        value={streetAddress}
        onChange={(ev) => handleChange("streetAddress", ev.target.value)}
        placeholder="Street Address"
        disabled={disabled}
      />
      <div className="flex gap-4">
        <div className="w-1/2">
          <label htmlFor="pincode" className="block mt-4 text-sm font-medium text-gray-700">
            Pincode
          </label>
          <input
            id="pincode"
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={pincode}
            onChange={(ev) => handleChange("pincode", ev.target.value)}
            placeholder="Pincode"
            disabled={disabled}
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="city" className="block mt-4 text-sm font-medium text-gray-700">
            City
          </label>
          <input
            id="city"
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={city}
            onChange={(ev) => handleChange("city", ev.target.value)}
            placeholder="City"
            disabled={disabled}
          />
        </div>
      </div>
      <label htmlFor="country" className="block mt-4 text-sm font-medium text-gray-700">
        Country
      </label>
      <input
        id="country"
        type="text"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        value={country}
        onChange={(ev) => handleChange("country", ev.target.value)}
        placeholder="Country"
        disabled={disabled}
      />
    </div>
  );
};

export default AddressInputs;
