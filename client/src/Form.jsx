import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Form = ({ handleCriteria, handleSubmit, handleTopic}) => {
  const handleClick = (e) => {
    e.target.value = '';
  }

  return (
    <form id="start-form">
      <input type="text" id="topic-input" name="topic" defaultValue='Type your topic here' onClick={handleClick} onChange={handleTopic} />
      <h2 id="input-instructions">What criteria are most important in making a decision about your topic?</h2>
      <div id="criteria-div">
        <label className="criteria-label" htmlFor="1" id="label-1">1.</label>
        <input type="text" className="criteria-input" id="input-1" name="1" onChange={handleCriteria} />
        <label className="criteria-label" htmlFor="2" id="label-2">2.</label>
        <input type="text" className="criteria-input" id="input-2" name="2" onChange={handleCriteria} />
        <label className="criteria-label" htmlFor="3" id="label-3">3.</label>
        <input type="text" className="criteria-input" id="input-3" name="3" onChange={handleCriteria} />
        <label className="criteria-label" htmlFor="4" id="label-4">4.</label>
        <input type="text" className="criteria-input" id="input-4" name="4" onChange={handleCriteria} />
        <label className="criteria-label" htmlFor="5" id="label-5">5.</label>
        <input type="text" className="criteria-input" id="input-5" name="5" onChange={handleCriteria} />
        <label className="criteria-label" htmlFor="6" id="label-6">6.</label>
        <input type="text" className="criteria-input" id="input-6" name="6" onChange={handleCriteria} />
        <label className="criteria-label" htmlFor="7" id="label-7">7.</label>
        <input type="text" className="criteria-input" id="input-7" name="7" onChange={handleCriteria} />
      </div>
      <div className="button-div">
        <button id="prioritize-button" onClick={handleSubmit}>PRIORITIZE</button>
      </div>
    </form>
  )
};
export default Form;