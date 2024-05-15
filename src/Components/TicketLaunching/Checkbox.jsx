import React from "react";

const Checkbox = ({ isChecked, onChange }) => {
  return (
    <div className="flex items-center pt-4 pl-3 space-x-2">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="h-5 w-5 text-primary border border-primary rounded"
      />
      <label className="text-xl text-gray-600">
        I agree to terms and conditions
      </label>
    </div>
  );
};

export default Checkbox;
