import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { funky } from "react-syntax-highlighter/dist/esm/styles/prism";

const MarkdownViewer = ({ markDownContent }) => {
  return (
    <div className="markdownStyle">
      {/* refer below code in react-markdown docs */}
      <Markdown
        remarkPlugins={[remarkGfm]} // plugin to support checkbox & tables
        children={
          markDownContent.length == 0 ? "> Nothing to preview" : markDownContent
        }
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
  );
};

export default MarkdownViewer;
