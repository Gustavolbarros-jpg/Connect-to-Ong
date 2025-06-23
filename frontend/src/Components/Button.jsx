import React from "react";

const Button = ({
  children,
  type = "button",
  onClick,
  className = "",
  primary,
  ...rest
}) => {
  const baseClasses =
    "py-3 px-3 rounded-[4px] shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";

  const primaryClasses = "bg-blue-600 text-white hover:bg-blue-700";

  const combinedClasses = `${baseClasses} ${
    primary ? primaryClasses : ""
  } ${className}`;

  return (
    <button type={type} onClick={onClick} className={combinedClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;
