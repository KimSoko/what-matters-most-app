import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Form = () => {
  const [topic, setTopic] = useState('');
  const [criteria, setCriteria] = useState({1:'',2:'',3:'',4:'',5:'',6:'',7:''});

  const handleChange = (e) => {
    setTopic(e.target.value);
  };

  return (
    <form id="start-form">
      <input type="text" id="topic-input" name="topic" defaultValue='Type your topic here' onChange={handleChange}/>
      <h2 id="input-instructions">What criteria are most important in making a decision about your topic?</h2>
      <div id="criteria-div">
        <label className="criteria-label">1.</label>
        <input className="criteria-input" value={criteria[1]} />
        <label className="criteria-label">2.</label>
        <input className="criteria-input" value={criteria[2]} />
        <label className="criteria-label">3.</label>
        <input className="criteria-input" value={criteria[3]} />
        <label className="criteria-label">4.</label>
        <input className="criteria-input" value={criteria[4]} />
        <label className="criteria-label">5.</label>
        <input className="criteria-input" value={criteria[5]} />
        <label className="criteria-label">6.</label>
        <input className="criteria-input" value={criteria[6]} />
        <label className="criteria-label">7.</label>
        <input className="criteria-input" value={criteria[7]} />
      </div>
    </form>
  )
};
export default Form;