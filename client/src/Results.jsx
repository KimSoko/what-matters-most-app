import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import List from './List.jsx';
import axios from 'axios';

const Results = ({ criteria, topic, handlePost }) => {
  const [email, setEmail] = useState('');

  const handleClick = (e) => {
   e.target.value = '';
  };

  const handleChange = (e) => {
   let newEmail = e.target.value;
   setEmail(newEmail);
  };

  const handleEmail = (e) => {
    axios.post('/mailChimpAPI', {
      email: email,
    })
  };

  return (
    <div>
      <div className="space" />

      <div className="header" id="results-header">
        <h1 className="header-title" id="results-logo">WHAT MATTERS MOST</h1>
        <h2 className="header-sub" id="results-sub">A decision making app</h2>

        <h3 id="email-text">If you want more of this amazingness,<br />sign up here</h3>
        <form id="email-form">
          <input type="text" name="email" id="email-input" defaultValue="name@email.com" onClick={handleClick} onChange={handleChange}></input>
          <button type="button" id="email-button" onClick={handleEmail}>Submit</button>
        </form>

      </div>

      <div className="body" id="results-body">
        <List criteria={criteria}
          topic={topic} />
      </div>
      <div id="footer-div">
        <h2 id="footer-h2">Wanna help more people?</h2>
        <p id="footer-p">I want to help everybody make better decisions in life,
        But in order to do that, I need your help.
        Click the button below and I'll store your data (no email) and analyze the results to improve decision making for everybody!</p>
        <button type="submit" id="help-button" onClick={handlePost}>I WANNA HELP</button>
      </div>
    </div>
  )
};
export default Results;