import React from 'react';
import ReactDOM from 'react-dom';

const List = ({ criteria, topic }) => {
  const sorted = criteria.slice().filter(obj => obj.value !== '').sort((a, b) => b.score - a.score);
  const most = sorted[0];
  const rest = sorted.slice(1);

  return (
    <div>
      <h1 id="most">{most.value}</h1>
      <h2 className="results-h2" id="results-sub">is what matters most to you when it comes to {topic}</h2>
      <h2 className="results-h2" id="most-score">TOTAL SCORE: {most.score}</h2>
      <div className="results-div" id="more-div">
        <h2 className="results-h2" id="results-more">The rest of your results include:</h2>
        <ul id="more-list">
          {rest.map((item) => {
            return (
              <li key={`${item.name}-${item.score}`}>{item.value}:  {item.score}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
};
export default List;