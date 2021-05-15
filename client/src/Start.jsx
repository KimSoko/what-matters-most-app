import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form.jsx';

const Start = () => {
  return (
    <div id="start-div">
      <div className="space" />
      <div className="header" id="start-header">

        <h1 className="header-title">WHAT MATTERS MOST</h1>
        <div className="header-text-div">
          <p className="prioritize-header">USE IT FOR...</p>
          <ul className="header-text">
            <li>Choosing a home</li>
            <li>Choosing a job</li>
            <li>Choosing a partner</li>
            <li>Prioritizing your life</li>
          </ul>
        </div>
        <h2 className="header-sub">A decision making app</h2>
      </div>

      <div className="body" id="start-body">
        <Form />
      </div>
    </div>
  )
};
export default Start;