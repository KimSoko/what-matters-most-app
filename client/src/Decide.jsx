import React from 'react';
import ReactDOM from 'react-dom';

const Decide = ({ list, handleVote, setDisplay }) => {

  return (
    <div>
      {list && (
        <div>
          {list[0].display === 'A' && (
            <>
              <div key={`${list[0].name}-${list[0].value}`} id="top-div">
                <button className="option-button" id="option-A" name={list[0].name} onClick={handleVote}>{list[0].value}</button>
              </div>

              <div key={`${list[1].name}-${list[1].value}`} id="bottom-div">
                <button className="option-button" id="option-B" name={list[1].name} onClick={handleVote}>{list[1].value}</button>
              </div>
            </>
          )}

          {list[0].display === 'B' && (
            <>
              <div key={`${list[0].name}-${list[0].value}`} id="top-div">
                <button className="option-button" id="option-C" name={list[0].name} onClick={handleVote}>{list[0].value}</button>
              </div>

              <div key={`${list[1].name}-${list[1].value}`} id="bottom-div">
                <button className="option-button" id="option-D" name={list[1].name} onClick={handleVote}>{list[1].value}</button>
              </div>
            </>
          )}

          {list[0].display === 'C' && (
            <>
              <div key={`${list[0].name}-${list[0].value}`} id="top-div">
                <button className="option-button" id="option-E" name={list[0].name} onClick={handleVote}>{list[0].value}</button>
              </div>

              <div key={`${list[1].name}-${list[1].value}`} id="bottom-div">
                <button className="option-button" id="option-F" name={list[1].name} onClick={handleVote}>{list[1].value}</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
};
export default Decide;