import React from "react";
import { FaMarkdown } from "react-icons/fa";

const TextArea = ({ label, id, value, setvalue, placeholder }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <textarea
        className="inputStyle h-[45dvh] resize-none"
        name={id}
        id={id}
        rows="10"
        value={value}
        onChange={setvalue}
        placeholder={placeholder}
      ></textarea>
      <small className="flex items-center gap-1">
        <FaMarkdown size={20} /> Markdown is supported
      </small>
    </div>
  );
};

export default TextArea;
