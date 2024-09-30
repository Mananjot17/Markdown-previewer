import React from 'react';

const Editor = ({ markdown, setMarkdown }) => {
  return (
    <textarea
      value={markdown}
      onChange={(e) => setMarkdown(e.target.value)}
      placeholder="Enter your Markdown here..."
      className="editor"
    />
  );
};

export default Editor;
