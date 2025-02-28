import React from "react";

const InputField = ({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  id,
  required = false,
  error,
  className = "",
}) => {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        required={required}
        className={`w-full h-12 p-3 bg-gray-100 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default InputField;
