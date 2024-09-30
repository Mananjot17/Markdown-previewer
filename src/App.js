import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Toolbar from './components/Toolbar';

const App = () => {
  const [markdown, setMarkdown] = useState('');

  return (
    <div className="app-container">
      <Toolbar markdown={markdown} setMarkdown={setMarkdown} />
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
      <Preview markdown={markdown} />
    </div>
  );
};

export default App;
