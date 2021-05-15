import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form.jsx';

const Start = () => {
  return (
    <div>
      <div className="space" />

      <div className="header" id="start-header">
        <img src=""></img>
        <ul>
          <li>House shopping</li>
          <li>Job hunting</li>
          <li>Choosing a partner</li>
          <li>Life priorities</li>
        </ul>
        <h2>A secondary headline</h2>
      </div>

      <div className="body" id="start-body">
        <Form />
      </div>
    </div>
  )
};
export default Start;