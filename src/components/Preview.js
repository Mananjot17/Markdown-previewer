import React from 'react';
import { marked } from 'marked';

const Preview = ({ markdown }) => {
  const renderMarkdown = marked(markdown, { breaks: true });

  return (
    <div
      className="preview"
      dangerouslySetInnerHTML={{ __html: renderMarkdown }}
    />
  );
};

export default Preview;
