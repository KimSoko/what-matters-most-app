import React from 'react';
import ReactDOM from 'react-dom';

const Results = () => {
  return (
    <div className="space" />

    <div className="header" id="results-header">
     <img src=""></img>
     <div id="email">
       <h2>Email Sign Up</h2>
       <form>
         <input>you@email.com</input>
         <button>Submit</button>
       </form>
     </div>
    </div>

    <div className="body" id="results-body">
      <List />
    </div>
  )
};
export default Results;