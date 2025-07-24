import React from "react";

const InputField = ({
  label,
  htmlFor,
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
  className,
  labelClassName,
  ...rest
}) => {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className={`block text-[20px] text-gray-700 ${
          labelClassName || ""
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full px-3 py-3 border-4 border-blue-600 rounded-[4px] shadow-sm placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-[20px] ${
          className || ""
        }`}
        {...rest}
      />
    </div>
  );
};

export default InputField;
