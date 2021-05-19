import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Start from './Start.jsx';
import Decide from './Decide.jsx';
import Results from './Results.jsx';
import helpers from './helpers.js';

const Index = () => {
  const [topic, setTopic] = useState('');
  const [criteria, setCriteria] = useState(helpers.emptyCriteria);
  const [options, setOptions] = useState([]);
  const [list, setList] = useState([]);
  const [display, setDisplay] = useState('start');

  useEffect(() => {
    let copy = options.slice();
    let popped = copy.pop();
    setList(popped);
  }, [options])


  const handleTopic = (e) => {
    setTopic(e.target.value);
  };

  const handleCriteria = (e) => {
    e.preventDefault();
    let oldCriteria = criteria.slice();
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
    setDisplay('decide');
  };

  const handleVote = (e) => {
    let winner = e.target.name;
    let oldCriteria = criteria.slice();
    for (let i = 0; i < oldCriteria.length; i++) {
      if (oldCriteria[i].name === winner) {
        oldCriteria[i].score++;
      }
    }

    setCriteria(oldCriteria);
    let oldOptions = options.slice();
    oldOptions.pop();
    setOptions(oldOptions);
    if (oldOptions.length === 0) {
      setDisplay('results');
    }
  }

  const handlePost = (e) => {
    let data = helpers.formatForDB(criteria);
    data.topic = topic;
    axios.post('/data', data)
    .then((response) => {
      console.log('POST to db successful ', response);
    })
    .catch((err) => {
      throw err;
    })
  }

  return (
    <div id="index-div">
      {display === 'start' && (
        <Start handleCriteria={handleCriteria}
               handleSubmit={handleSubmit}
               handleTopic={handleTopic}
        />
      )}
      {display === 'decide' && (
        <Decide handleVote={handleVote}
                list={list}
        />
      )}
      {display === 'results' && (
        <Results criteria={criteria}
                 topic={topic}
                 handlePost={handlePost}/>
      )}
    </div>
  )
};

ReactDOM.render(
  <Index />,
  document.getElementById('app')
);