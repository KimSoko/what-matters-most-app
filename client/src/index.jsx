import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Start from './Start.jsx';
import Decide from './Decide.jsx';
import Results from './Results.jsx';
import helpers from './helpers.js';

const Index = () => {
  const [criteria, setCriteria] = useState(helpers.emptyCriteria);
  const [options, setOptions] = useState([]);
  const [display, setDisplay] = useState('start');

  const handleCriteria = (e) => {
    e.preventDefault();
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
    setOptions(helpers.createOptions(criteria));
    setDisplay('decide');
  };

  return (
    <div id="index-div">
      {display === 'start' && (
        <Start handleCriteria={handleCriteria}
          handleSubmit={handleSubmit}
        />
      )}
      {display === 'decide' && (
        <Decide options={options}
          setOptions={setOptions}
        />
      )}
      {display === 'results' && (
        <Results options={options} />
      )}
    </div>
  )
};

ReactDOM.render(
  <Index />,
  document.getElementById('app')
);