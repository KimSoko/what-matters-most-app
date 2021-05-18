import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Start from './Start.jsx';
import Decide from './Decide.jsx';
import Results from './Results.jsx';
import helpers from './helpers.js';

const Index = () => {
  const [criteria, setCriteria] = useState(helpers.emptyCriteria);
  const [options, setOptions] = useState([]);

  const handleCriteria = (e) => {
    let oldCriteria = criteria;
    let num = (e.target.name);
    for (let i = 0; i < oldCriteria.length; i++) {
      if (oldCriteria[i].name === num) {
        oldCriteria[i].value = e.target.value;
      }
    }
    setCriteria(oldCriteria);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOptions(createOptions(criteria));
  }

  return (
    <div id="index-div">
      <Start handleCriteria={handleCriteria}
             options={options}
             setOptions={setOptions}
             />
      <Decide options={options}
              setOptions={setOptions}/>
      <Results options={options} />
    </div>
  )
};

ReactDOM.render(
  <Index />,
  document.getElementById('app')
);