import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Form = () => {
  const [topic, setTopic] = useState('Type your topic here');
  const [criteria, setCriteria] = useState({1:'',2:'',3:'',4:'',5:'',6:'',7:''});

  return (
    <form id="start-form">
      <input id="topic-input" value={topic}/>
      <h2>What criteria are most important in making a decision about your topic?</h2>
      <label>1.
        <input className="criteria-input" value={criteria[1]} />
      </label>
      <label>2.
        <input className="criteria-input" value={criteria[2]} />
      </label>
      <label>3.
        <input className="criteria-input" value={criteria[3]} />
      </label>
      <label>4.
        <input className="criteria-input" value={criteria[4]} />
      </label>
      <label>5.
        <input className="criteria-input" value={criteria[5]} />
      </label>
      <label>6.
        <input className="criteria-input" value={criteria[6]} />
      </label>
      <label>7.
        <input className="criteria-input" value={criteria[7]} />
      </label>
    </form>
  )
};
export default Form;