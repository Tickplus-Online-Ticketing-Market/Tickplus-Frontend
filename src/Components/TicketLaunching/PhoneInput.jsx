import React, { useState, useEffect } from "react";

const PhoneInput = ({ onChange }) => {
  const [countryCode, setCountryCode] = useState("+1"); // Default country code
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const formattedPhoneNumber = `${countryCode}-${phoneNumber}`;
    onChange(formattedPhoneNumber); // Call the onChange function with the formatted phone number
  }, [countryCode, phoneNumber, onChange]);

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
  };

  return (
    <div className="flex gap-3">
      {/* Country Code Dropdown */}
      <div className="mb-4 pl-4">
        <label
          htmlFor="countryCode"
          className="block text-base font-medium text-gray-600"
        >
          Country Code
        </label>
        <select
          id="countryCode"
          name="countryCode"
          className="mt-1 block w-36 p-2 border-gray-300 rounded-md shadow-lg focus:outline-none text-base"
          value={countryCode}
          onChange={handleCountryCodeChange}
        >
          <option value="+1">+1 (United States)</option>
          <option value="+91">+91 (India)</option>
          <option value="+94">+94 (Sri Lanka)</option>
          {/* Add more country codes as needed */}
        </select>
      </div>

      {/* Phone Number Input */}
      <div>
        <label
          htmlFor="phoneNumber"
          className="block text-base font-medium text-gray-600"
        >
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          className="mt-1 block w-72 p-2 border-gray-300 rounded-md shadow-lg text-base"
          placeholder="eg : 71XXXXXXX"
          maxLength={10}
          minLength={10}
          value={phoneNumber}
          required
          onChange={handlePhoneNumberChange}
        />
      </div>
    </div>
  );
};

export default PhoneInput;
