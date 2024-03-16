import React, { useRef, useState } from "react";

import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { funky } from "react-syntax-highlighter/dist/esm/styles/prism";

import { FaMarkdown } from "react-icons/fa";

const Draft = () => {
  const formRef = useRef();
  const [markDownContent, setMarkDownContent] = useState("");

  const moveToNxtEl = (event, id) => {
    const value = event.target.value;
    if (event.code === "Enter" || event.key === "Enter") {
      event.preventDefault();
      value.length >= 2 && formRef.current.querySelector(`#${id}`).focus();
    }
    return;
  };

  return (
    <>
      <div className="container ">
        <form className="space-y-4 py-4" ref={formRef}>
          {/* title */}
          <div className="flex flex-col gap-1">
            <label htmlFor="title">Add Title</label>
            <input
              autoFocus
              name="title"
              type="text"
              id="title"
              className="inputStyle"
              placeholder="Title"
              onKeyDown={(e) => moveToNxtEl(e, "MarkDownEditor")}
            />
          </div>
          {/* text area  */}
          <div className="flex flex-col gap-1">
            <label htmlFor="MarkDownEditor">
              Add detailed notes for future reference
            </label>
            <textarea
              className="inputStyle"
              name="MarkDownEditor"
              id="MarkDownEditor"
              rows="10"
              value={markDownContent}
              onChange={(e) => setMarkDownContent(e.target.value)}
              placeholder="Add your notes here "
            ></textarea>
            <small className="flex items-center gap-1">
              <FaMarkdown size={20} /> Markdown is supported
            </small>
          </div>
          {/* actions  */}
          <div className="flex justify-end gap-4">
            <button
              className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded transition-all duration-300"
              type="button"
            >
              Preview
            </button>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded transition-all duration-300"
            >
              Add to Library
            </button>
          </div>
        </form>

        <div className="markdownStyle">
          {/* below code is given in react-markdown docs */}
          <Markdown
            children={markDownContent}
            components={{
              code(props) {
                const { children, className, node, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    children={String(children).replace(/\n$/, "")}
                    language={match[1]}
                    style={funky}
                  />
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Draft;
