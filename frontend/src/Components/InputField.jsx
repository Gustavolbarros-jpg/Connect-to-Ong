import React from "react";

const InputField = ({
  label,
  // A prop 'htmlFor' não é necessária se você usa 'id' e 'name'
  type = "text",
  id,
  name,
  placeholder,
  value,
  onChange,
  error, // 1. Adicionamos a prop 'error' aqui para recebê-la
  className,
  labelClassName,
  ...rest
}) => {
  // 2. Criamos uma variável para decidir a cor da borda
  const borderClass = error ? "border-red-500" : "border-blue-600";

  return (
    <div>
      <label
        htmlFor={id || name} // É uma boa prática ligar o label ao id ou name
        className={`block text-[20px] text-gray-700 ${labelClassName || ""}`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id || name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        // 3. A className agora é construída dinamicamente
        className={`mt-1 block w-full px-3 py-3 border-4 rounded-[4px] shadow-sm placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[20px] ${borderClass} ${
          className || ""
        }`}
        {...rest}
      />
    </div>
  );
};

export default InputField;
