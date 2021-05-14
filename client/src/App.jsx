import React from 'react';
import ReactDOM from 'react-dom';
import Start from './Start.jsx';
import Decide from './Decide.jsx';
import Results from './Results.jsx';

const App = () => {
  return (
    <div>
      <Start />
      <Decide />
      <Results />
    </div>
  )
};
export default App;