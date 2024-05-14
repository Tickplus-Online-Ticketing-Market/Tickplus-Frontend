import React from "react";

const Checkbox = ({ isChecked, onChange }) => {
  return (
    <div className="flex items-center pt-2 space-x-2">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="h-5 w-5 text-accent border-gray-300 rounded"
      />
      <label className="text-base text-gray-600">
        I agree to terms and conditions
      </label>
    </div>
  );
};

export default Checkbox;
