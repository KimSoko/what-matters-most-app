import React from 'react';
import ReactDOM from 'react-dom';

const List = ({ criteria, topic }) => {
  const sorted = criteria.slice().filter(obj => obj.value !== '').sort((a, b) => b.score - a.score);
  const most = sorted[0];
  const rest = sorted.slice(1);

  return (
    <div>
      <div id="most-div">
        <h1 id="most">{most.value}</h1>
        <h2 className="results-h2" id="results-sub">is what matters most to you when it comes to {topic}</h2>
        <h2 className="results-h2" id="most-score">TOTAL SCORE: {most.score}</h2>
      </div>
      <div className="results-div" id="more-div">
        {/* <h2 className="results-h2" id="results-more">COMPLETE RESULTS</h2> */}
        <div id="table-div">
          <table>
            <thead>
              <tr>
                <th className="table-header" id="header-rank">RANK</th>
                <th className="table-header" id="header-name">CRITERIA</th>
                <th className="table-header" id="header-score">SCORE</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((item) => {
                return (
                  <tr key={`${item.name}-${item.score}`}>
                    <td className="table-row" id="row-score">{sorted.indexOf(item) + 1}</td>
                    <td className="table-row" id="row-name">{item.value}</td>
                    <td className="table-row" id="row-score">{item.score}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};
export default List;