import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form.jsx';

const Start = ({ handleCriteria, handleSubmit }) => {
  return (
    <div id="start-div">
      <div className="space" />
      <div className="header" id="start-header">

        <h1 className="header-title">WHAT MATTERS MOST</h1>
        <h2 className="header-sub">A decision making app</h2>
      </div>

      <div className="body" id="start-body">
        <Form handleCriteria={handleCriteria}
              handleSubmit={handleSubmit} />
      </div>
    </div>
  )
};
export default Start;