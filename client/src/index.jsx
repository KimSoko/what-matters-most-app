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
    console.log('Criteria before ', oldCriteria);
    let num = (e.target.name);
    console.log('This is num ', num)
    for (let i = 0; i < oldCriteria.length; i++) {
      if (oldCriteria[i].name === num) {
        console.log('This is the right obj ', oldCriteria[i]);
        oldCriteria[i].value = e.target.value;
      }

    }
    console.log('Criteria after ', oldCriteria);
    setCriteria(oldCriteria);
  };

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