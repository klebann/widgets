import React, {useState} from 'react';
import Accordion from "./components/Accordion";
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

import items from "./data/items";
import colors from "./data/colors";

const App = () => {
  const [selected, setSelected] = useState(colors[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Selecty a color"
          options={colors}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;