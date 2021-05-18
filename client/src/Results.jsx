import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import List from './List.jsx';

const Results = ({ criteria, topic }) => {
  const [email, setEmail] = useState('');

  const handleClick = (e) => {

  };

  const handleChange = (e) => {

  };

  const handleEmail = (e) => {

  };

  return (
    <div>
      <div className="space" />

      <div className="header" id="results-header">
      <h1 className="header-title" id="results-logo">WHAT MATTERS MOST</h1>
      <h2 className="header-sub" id="results-sub">A decision making app</h2>
        <div id="email">
           <h3 id="email-text">If you want more,<br/>sign up here</h3>
          <form>
            <input type="text" name="email" id="email-input" defaultValue="name@email.com" onClick={handleClick} onChange={handleChange}></input>
            <button type="button" id="email-button" onClick={handleEmail}>Submit</button>
          </form>
        </div>
      </div>

      <div className="body" id="results-body">
        <List criteria={criteria}
              topic={topic} />
      </div>
    </div>
  )
};
export default Results;