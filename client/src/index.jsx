import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Start from './Start.jsx';
import Decide from './Decide.jsx';
import Results from './Results.jsx';
import helpers from './helpers.js';

const Index = () => {
  const [criteria, setCriteria] = useState(helpers.emptyCriteria);
  const [options, setOptions] = useState([]);
  const [list, setList] = useState([]);
  const [display, setDisplay] = useState('start');

  useEffect(() => {
    console.log('This is options before', options);
    let copy = options.slice();
    let popped = copy.pop();
    setList(popped);
    console.log('This is list after render ', list);
  }, [options])

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
    let newOptions = helpers.createOptions(criteria);
    setOptions(newOptions);
    console.log('This is options on submit ', options);
    setDisplay('decide');
  };

  const handleVote = (e) => {
    console.log('voted');
    let winner = e.target.name;
    console.log('winner ',  winner);
    let oldCriteria = criteria.slice();
    console.log('Criteria before ', oldCriteria);
    for (let i = 0; i < oldCriteria.length; i++) {
      if (oldCriteria[i].name === winner) {
        oldCriteria[i].score++;
      }
    }
    setCriteria(oldCriteria);
    console.log('Criteria after ', criteria);

    let oldOptions = options.slice();
    console.log('Options before ', oldOptions);
    oldOptions.pop();
    setOptions(oldOptions);
    console.log('Options after ', options);
    if (options.length === 0) {
      setDisplay('results');
      console.log('criteria ', criteria);
    }
  }


  return (
    <div id="index-div">
      {display === 'start' && (
        <Start handleCriteria={handleCriteria}
          handleSubmit={handleSubmit}
        />
      )}
      {display === 'decide' && (
        <Decide handleVote={handleVote}
                list={list}
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