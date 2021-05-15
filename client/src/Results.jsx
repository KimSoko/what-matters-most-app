import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.jsx';

const Results = () => {
  return (
    <div>
      <div className="space" />

      <div className="header" id="results-header">
        <img src=""></img>
        <div id="email">
          <h2>Email Sign Up</h2>
          <form>
            <button>Submit</button>
          </form>
        </div>
      </div>

      <div className="body" id="results-body">
        <List />
      </div>
    </div>
  )
};
export default Results;