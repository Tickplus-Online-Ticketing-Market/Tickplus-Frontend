import React, { useState, useEffect } from "react";

const PhoneInput = ({ onChange, error }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const formattedPhoneNumber = `${phoneNumber}`;
    onChange(formattedPhoneNumber); // Call the onChange function with the formatted phone number
  }, [phoneNumber, onChange]);

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
  };

  return (
    <div>
      {/* Phone Number Input */}
      <div className="pl-4">
        <label
          htmlFor="phoneNumber"
          className="block text-base font-medium text-gray-600"
        ></label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          className={`mt-1 block w-72 p-2  ${
            error ? "border-red-500" : "border border-primary"
          } rounded-md shadow-lg text-base`}
          placeholder="eg : 07XXXXXXXX"
          maxLength={10}
          minLength={10}
          value={phoneNumber}
          required
          onChange={handlePhoneNumberChange}
        />
        {error && <div className="text-red text-sm mt-1">{error}</div>}
      </div>
    </div>
  );
};

export default PhoneInput;
