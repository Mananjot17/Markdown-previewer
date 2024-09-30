import React from 'react';

const Toolbar = ({ markdown, setMarkdown }) => {
  const addBold = () => setMarkdown(markdown + `**bold text**`);
  const addItalic = () => setMarkdown(markdown + `*italic text*`);
  const addHeader = () => setMarkdown(markdown + `\n# Header`);
  const addStrikethrough = () => setMarkdown(markdown + `~~strikethrough~~`);
  const addLink = () => setMarkdown(markdown + `[link](http://example.com)`);
  const addImage = () => setMarkdown(markdown + `![alt text](http://example.com/image.jpg)`);
  const addCode = () => setMarkdown(markdown + `\`inline code\``);
  const addBlockquote = () => setMarkdown(markdown + `\n> blockquote`);
  const addUnorderedList = () => setMarkdown(markdown + `\n- Item 1\n- Item 2\n- Item 3`);
  const addOrderedList = () => setMarkdown(markdown + `\n1. First\n2. Second\n3. Third`);
  
  return (
    <div className="toolbar">
      <button onClick={addBold}>Bold</button>
      <button onClick={addItalic}>Italic</button>
      <button onClick={addHeader}>Header</button>
      <button onClick={addStrikethrough}>Strikethrough</button>
      <button onClick={addLink}>Link</button>
      <button onClick={addImage}>Image</button>
      <button onClick={addCode}>Inline Code</button>
      <button onClick={addBlockquote}>Blockquote</button>
      <button onClick={addUnorderedList}>Unordered List</button>
      <button onClick={addOrderedList}>Ordered List</button>
    </div>
  );
};

export default Toolbar;
