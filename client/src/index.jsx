import React from 'react';
import ReactDOM from 'react-dom';
import Start from './Start.jsx';
import Decide from './Decide.jsx';
import Results from './Results.jsx';

const Index = () => {
  return (
    <div id="index-div">
      <Start />
      <Decide />
      <Results />
    </div>
  )
};

ReactDOM.render(
  <Index />,
  document.getElementById('app')
);