import React from "react";

const Input = ({
  placeholder,
  label,
  id,
  autoFocus,
  onEnter,
  type = "text",
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <input
        autoFocus={autoFocus}
        name={id}
        type={type}
        id={id}
        className="inputStyle" // default style from index.css
        placeholder={placeholder}
        onKeyDown={onEnter}
      />
    </div>
  );
};

export default Input;
