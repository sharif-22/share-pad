import React, { useRef, useState } from "react";
import MarkdownViewer from "../components/uiComponents/MarkdownViewer";
import Input from "../components/uiComponents/form/Input";
import TextArea from "../components/uiComponents/form/TextArea";

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

  const sendDataToDB = (event) => {
    event.preventDefault();
    // get form data
    const formData = new FormData(formRef.current);
    const formObj = Object.fromEntries(formData);
    console.log(formObj);
    formRef.current.reset();
    setMarkDownContent("");
  };

  return (
    <>
      <div className="container p-3">
        <form className="space-y-4 py-4" ref={formRef} onSubmit={sendDataToDB}>
          {/* title */}
          <Input
            id="title"
            label="Add Title"
            autoFocus={true}
            placeholder="Add Title for your notes"
            onEnter={(e) => moveToNxtEl(e, "MarkDownEditor")}
          />
          {/* text area  */}

          <TextArea
            label="Add detailed notes for future reference"
            id="MarkDownEditor"
            value={markDownContent}
            setvalue={(e) => setMarkDownContent(e.target.value)}
            placeholder="Add your notes here"
          />

          {/* actions  */}
          <div className="flex justify-end gap-4">
            <button className="btn-blue" type="button">
              Preview
            </button>
            <button type="submit" className="btn-green">
              Add to Library
            </button>
          </div>
        </form>

        <MarkdownViewer markDownContent={markDownContent} />
      </div>
    </>
  );
};

export default Draft;
