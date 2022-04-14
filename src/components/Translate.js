import React, { useState } from 'react';
import Dropdown from "./Dropdown";
import Convert from "./Convert";

import languages from "../data/languages";

const Translate = () => {
  const [language, setLanguage] = useState(languages[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
      </div>
      <Dropdown
        options={languages}
        selected={language}
        onSelectedChange={setLanguage}
        label="Select a Language"
      />
      <hr/>
      <h3 className="ui header">Output</h3>
      <Convert
        language={language}
        text={text}
      />
    </div>
  );
};

export default Translate;