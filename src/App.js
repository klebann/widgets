import React, {useState} from 'react';
import Accordion from "./components/Accordion";
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from "./components/Translate";

import items from "./data/items";
import colors from "./data/colors";

const App = () => {
  return (
    <div>
      <Translate />
    </div>
  );
};

export default App;